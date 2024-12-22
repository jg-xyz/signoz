/* eslint-disable sonarjs/no-duplicate-string */
import { K8sDeploymentsData } from 'api/infraMonitoring/getK8sDeploymentsList';
import { PANEL_TYPES } from 'constants/queryBuilder';
import { GetQueryResultsProps } from 'lib/dashboard/getQueryResults';
import { DataTypes } from 'types/api/queryBuilder/queryAutocompleteResponse';
import { EQueryType } from 'types/common/dashboard';
import { DataSource } from 'types/common/queryBuilder';
import { v4 } from 'uuid';

export const deploymentWidgetInfo = [
	{
		title: 'CPU Usage (cores)',
		yAxisUnit: '',
	},
	{
		title: 'Memory Usage (bytes)',
		yAxisUnit: 'bytes',
	},
	{
		title: 'CPU Usage (%)',
		yAxisUnit: 'percent',
	},
	{
		title: 'Memory Usage (%)',
		yAxisUnit: 'percent',
	},
	{
		title: 'Pods by CPU (top 10)',
		yAxisUnit: '',
	},
	{
		title: 'Pods by Memory (top 10)',
		yAxisUnit: 'bytes',
	},
	{
		title: 'Network error count',
		yAxisUnit: '',
	},
	{
		title: 'Network IO rate',
		yAxisUnit: 'binBps',
	},
	{
		title: 'Filesystem usage (bytes)',
		yAxisUnit: 'bytes',
	},
	{
		title: 'Filesystem usage (%)',
		yAxisUnit: 'percent',
	},
];

export const getDeploymentQueryPayload = (
	deployment: K8sDeploymentsData,
	start: number,
	end: number,
): GetQueryResultsProps[] => [
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_cpu_utilization--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_cpu_utilization',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: '441b62d7',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'used (avg)',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_allocatable_cpu--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_allocatable_cpu',
							type: 'Gauge',
						},
						aggregateOperator: 'latest',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'B',
						filters: {
							items: [
								{
									id: 'b205b1a3',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'allocatable',
						limit: null,
						orderBy: [],
						queryName: 'B',
						reduceTo: 'avg',
						spaceAggregation: 'max',
						stepInterval: 60,
						timeAggregation: 'latest',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_container_cpu_request--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_container_cpu_request',
							type: 'Gauge',
						},
						aggregateOperator: 'latest',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'C',
						filters: {
							items: [
								{
									id: '884c2bf3',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'requests',
						limit: null,
						orderBy: [],
						queryName: 'C',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'latest',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_cpu_utilization--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_cpu_utilization',
							type: 'Gauge',
						},
						aggregateOperator: 'max',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'D',
						filters: {
							items: [
								{
									id: '98be9da1',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'used (max)',
						limit: null,
						orderBy: [],
						queryName: 'D',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'max',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_cpu_utilization--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_cpu_utilization',
							type: 'Gauge',
						},
						aggregateOperator: 'min',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'E',
						filters: {
							items: [
								{
									id: 'ce97dd7b',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'used (min)',
						limit: null,
						orderBy: [],
						queryName: 'E',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'min',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_memory_usage--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_memory_usage',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: 'fdffcbb2',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'used (avg)',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_allocatable_memory--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_allocatable_memory',
							type: 'Gauge',
						},
						aggregateOperator: 'latest',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'B',
						filters: {
							items: [
								{
									id: '9b79a8bd',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'allocatable',
						limit: null,
						orderBy: [],
						queryName: 'B',
						reduceTo: 'avg',
						spaceAggregation: 'max',
						stepInterval: 60,
						timeAggregation: 'latest',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_container_memory_request--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_container_memory_request',
							type: 'Gauge',
						},
						aggregateOperator: 'latest',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'C',
						filters: {
							items: [
								{
									id: '3387fb4a',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'requests',
						limit: null,
						orderBy: [],
						queryName: 'C',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'latest',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_memory_usage--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_memory_usage',
							type: 'Gauge',
						},
						aggregateOperator: 'max',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'D',
						filters: {
							items: [
								{
									id: 'd1ad7ccb',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'used (max)',
						limit: null,
						orderBy: [],
						queryName: 'D',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'max',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_memory_usage--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_memory_usage',
							type: 'Gauge',
						},
						aggregateOperator: 'min',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'E',
						filters: {
							items: [
								{
									id: '5e578329',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'used (min)',
						limit: null,
						orderBy: [],
						queryName: 'E',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'min',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_memory_working_set--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_memory_working_set',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'F',
						filters: {
							items: [
								{
									id: '6ab3ec98',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'working set',
						limit: null,
						orderBy: [],
						queryName: 'F',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_memory_rss--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_memory_rss',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'G',
						filters: {
							items: [
								{
									id: '80c9a1db',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'rss',
						limit: null,
						orderBy: [],
						queryName: 'G',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_cpu_utilization--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_cpu_utilization',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: true,
						expression: 'A',
						filters: {
							items: [
								{
									id: '752765ef',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'used',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_allocatable_cpu--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_allocatable_cpu',
							type: 'Gauge',
						},
						aggregateOperator: 'latest',
						dataSource: DataSource.METRICS,
						disabled: true,
						expression: 'B',
						filters: {
							items: [
								{
									id: 'f0c5c1ed',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'allocatable',
						limit: null,
						orderBy: [],
						queryName: 'B',
						reduceTo: 'avg',
						spaceAggregation: 'max',
						stepInterval: 60,
						timeAggregation: 'latest',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_container_cpu_request--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_container_cpu_request',
							type: 'Gauge',
						},
						aggregateOperator: 'latest',
						dataSource: DataSource.METRICS,
						disabled: true,
						expression: 'C',
						filters: {
							items: [
								{
									id: 'b952b389',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'requests',
						limit: null,
						orderBy: [],
						queryName: 'C',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'latest',
					},
				],
				queryFormulas: [
					{
						disabled: false,
						expression: 'A/B',
						legend: 'used/allocatable',
						queryName: 'F1',
					},
					{
						disabled: false,
						expression: 'A/C',
						legend: 'used/request',
						queryName: 'F2',
					},
				],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_memory_usage--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_memory_usage',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: true,
						expression: 'A',
						filters: {
							items: [
								{
									id: 'c2a2c926',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'used',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_allocatable_memory--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_allocatable_memory',
							type: 'Gauge',
						},
						aggregateOperator: 'latest',
						dataSource: DataSource.METRICS,
						disabled: true,
						expression: 'B',
						filters: {
							items: [
								{
									id: '20e6760c',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'allocatable',
						limit: null,
						orderBy: [],
						queryName: 'B',
						reduceTo: 'avg',
						spaceAggregation: 'max',
						stepInterval: 60,
						timeAggregation: 'latest',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_container_memory_request--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_container_memory_request',
							type: 'Gauge',
						},
						aggregateOperator: 'latest',
						dataSource: DataSource.METRICS,
						disabled: true,
						expression: 'C',
						filters: {
							items: [
								{
									id: 'fcc4d5e8',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'requests',
						limit: null,
						orderBy: [],
						queryName: 'C',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'latest',
					},
				],
				queryFormulas: [
					{
						disabled: false,
						expression: 'A/B',
						legend: 'used/allocatable',
						queryName: 'F1',
					},
					{
						disabled: false,
						expression: 'A/C',
						legend: 'used/request',
						queryName: 'F2',
					},
				],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_pod_cpu_utilization--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_pod_cpu_utilization',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: '88d38c06',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_pod_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_pod_name',
								type: 'tag',
							},
						],
						having: [],
						legend: '{{k8s_pod_name}}',
						limit: 10,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_pod_memory_usage--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_pod_memory_usage',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: '43033387',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_pod_name--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'k8s_pod_name',
								type: 'tag',
							},
						],
						having: [],
						legend: '{{k8s_pod_name}}',
						limit: 10,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_network_errors--float64--Sum--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_network_errors',
							type: 'Sum',
						},
						aggregateOperator: 'increase',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: 'e9ce8079',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'direction--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'direction',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'interface--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'interface',
								type: 'tag',
							},
						],
						having: [],
						legend: '{{direction}} :: {{interface}}',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'increase',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_network_io--float64--Sum--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_network_io',
							type: 'Sum',
						},
						aggregateOperator: 'rate',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: 'd62d103f',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'direction--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'direction',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'interface--string--tag--false',
								isColumn: false,
								isJSON: false,
								key: 'interface',
								type: 'tag',
							},
						],
						having: [],
						legend: '{{direction}} :: {{interface}}',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'rate',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_filesystem_usage--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_filesystem_usage',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: 'b85d3580',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'used',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_filesystem_capacity--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_filesystem_capacity',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'B',
						filters: {
							items: [
								{
									id: '23f502e1',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'capacity',
						limit: null,
						orderBy: [],
						queryName: 'B',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_filesystem_available--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_filesystem_available',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'C',
						filters: {
							items: [
								{
									id: 'b80650ec',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'available',
						limit: null,
						orderBy: [],
						queryName: 'C',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_filesystem_usage--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_filesystem_usage',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: true,
						expression: 'A',
						filters: {
							items: [
								{
									id: 'b85d3580',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'used',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_deployment_filesystem_capacity--float64--Gauge--true',
							isColumn: true,
							isJSON: false,
							key: 'k8s_deployment_filesystem_capacity',
							type: 'Gauge',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: true,
						expression: 'B',
						filters: {
							items: [
								{
									id: '23f502e1',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_deployment_name--string--tag--false',
										isColumn: false,
										isJSON: false,
										key: 'k8s_deployment_name',
										type: 'tag',
									},
									op: '=',
									value: deployment.meta.k8s_deployment_name,
								},
							],
							op: 'AND',
						},
						functions: [],
						groupBy: [],
						having: [],
						legend: 'capacity',
						limit: null,
						orderBy: [],
						queryName: 'B',
						reduceTo: 'avg',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
					},
				],
				queryFormulas: [
					{
						disabled: false,
						expression: 'A/B',
						legend: 'util %',
						queryName: 'F1',
					},
				],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: v4(),
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		variables: {},
		formatForWeb: false,
		start,
		end,
	},
];
