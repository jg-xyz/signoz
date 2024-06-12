package signozio

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/pkg/errors"
	"go.uber.org/zap"

	"go.signoz.io/signoz/ee/query-service/constants"
	"go.signoz.io/signoz/ee/query-service/model"
	basemodel "go.signoz.io/signoz/pkg/query-service/model"
)

var C *Client

const (
	POST             = "POST"
	APPLICATION_JSON = "application/json"
)

type Client struct {
	Prefix string
}

func New() *Client {
	return &Client{
		Prefix: constants.LicenseSignozIo,
	}
}

func init() {
	C = New()
}

// ActivateLicense sends key to license.signoz.io and gets activation data
func ActivateLicense(key, siteId string) (*ActivationResponse, *basemodel.ApiError) {
	licenseReq := map[string]string{
		"key":    key,
		"siteId": siteId,
	}

	reqString, _ := json.Marshal(licenseReq)
	httpResponse, err := http.Post(C.Prefix+"/licenses/activate", APPLICATION_JSON, bytes.NewBuffer(reqString))

	if err != nil {
		zap.L().Error("failed to connect to license.signoz.io", zap.Error(err))
		return nil, basemodel.BadRequest(fmt.Errorf("unable to connect with license.signoz.io, please check your network connection"))
	}

	httpBody, err := io.ReadAll(httpResponse.Body)
	if err != nil {
		zap.L().Error("failed to read activation response from license.signoz.io", zap.Error(err))
		return nil, basemodel.BadRequest(fmt.Errorf("failed to read activation response from license.signoz.io"))
	}

	defer httpResponse.Body.Close()

	// read api request result
	result := ActivationResult{}
	err = json.Unmarshal(httpBody, &result)
	if err != nil {
		zap.L().Error("failed to marshal activation response from license.signoz.io", zap.Error(err))
		return nil, basemodel.InternalError(errors.Wrap(err, "failed to marshal license activation response"))
	}

	switch httpResponse.StatusCode {
	case 200, 201:
		return result.Data, nil
	case 400, 401:
		return nil, basemodel.BadRequest(fmt.Errorf(fmt.Sprintf("failed to activate: %s", result.Error)))
	default:
		return nil, basemodel.InternalError(fmt.Errorf(fmt.Sprintf("failed to activate: %s", result.Error)))
	}

}

// ValidateLicense validates the license key
func ValidateLicense(activationId string) (*ActivationResponse, *basemodel.ApiError) {
	validReq := map[string]string{
		"activationId": activationId,
	}

	reqString, _ := json.Marshal(validReq)
	response, err := http.Post(C.Prefix+"/licenses/validate", APPLICATION_JSON, bytes.NewBuffer(reqString))

	if err != nil {
		return nil, basemodel.BadRequest(errors.Wrap(err, "unable to connect with license.signoz.io, please check your network connection"))
	}

	body, err := io.ReadAll(response.Body)
	if err != nil {
		return nil, basemodel.BadRequest(errors.Wrap(err, "failed to read validation response from license.signoz.io"))
	}

	defer response.Body.Close()

	switch response.StatusCode {
	case 200, 201:
		a := ActivationResult{}
		err = json.Unmarshal(body, &a)
		if err != nil {
			return nil, basemodel.BadRequest(errors.Wrap(err, "failed to marshal license validation response"))
		}
		return a.Data, nil
	case 400, 401:
		return nil, basemodel.BadRequest(errors.Wrap(fmt.Errorf(string(body)),
			"bad request error received from license.signoz.io"))
	default:
		return nil, basemodel.InternalError(errors.Wrap(fmt.Errorf(string(body)),
			"internal error received from license.signoz.io"))
	}

}

func NewPostRequestWithCtx(ctx context.Context, url string, contentType string, body io.Reader) (*http.Request, error) {
	req, err := http.NewRequestWithContext(ctx, POST, url, body)
	if err != nil {
		return nil, err
	}
	req.Header.Add("Content-Type", contentType)
	return req, err

}

// SendUsage reports the usage of signoz to license server
func SendUsage(ctx context.Context, usage model.UsagePayload) *basemodel.ApiError {
	reqString, _ := json.Marshal(usage)
	req, err := NewPostRequestWithCtx(ctx, C.Prefix+"/usage", APPLICATION_JSON, bytes.NewBuffer(reqString))
	if err != nil {
		return basemodel.BadRequest(errors.Wrap(err, "unable to create http request"))
	}

	res, err := http.DefaultClient.Do(req)
	if err != nil {
		return basemodel.BadRequest(errors.Wrap(err, "unable to connect with license.signoz.io, please check your network connection"))
	}

	body, err := io.ReadAll(res.Body)
	if err != nil {
		return basemodel.BadRequest(errors.Wrap(err, "failed to read usage response from license.signoz.io"))
	}

	defer res.Body.Close()

	switch res.StatusCode {
	case 200, 201:
		return nil
	case 400, 401:
		return basemodel.BadRequest(errors.Wrap(fmt.Errorf(string(body)),
			"bad request error received from license.signoz.io"))
	default:
		return basemodel.InternalError(errors.Wrap(fmt.Errorf(string(body)),
			"internal error received from license.signoz.io"))
	}
}
