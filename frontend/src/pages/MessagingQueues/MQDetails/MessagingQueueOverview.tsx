import { useSelector } from 'react-redux';
import { AppState } from 'store/reducers';
import { GlobalReducer } from 'types/reducer/globalTime';

import { MessagingQueueServicePayload } from './MQTables/getConsumerLagDetails';
import { getPartitionLatencyOverview } from './MQTables/getPartitionLatencyOverview';
import MessagingQueuesTable from './MQTables/MQTables';

function MessagingQueueOverview({
	selectedView,
}: {
	selectedView: string;
}): JSX.Element {
	const { maxTime, minTime } = useSelector<AppState, GlobalReducer>(
		(state) => state.globalTime,
	);

	const tableApiPayload: MessagingQueueServicePayload = {
		variables: {},
		start: minTime,
		end: maxTime,
	};
	return (
		<div>
			<MessagingQueuesTable
				selectedView={selectedView}
				tableApiPayload={tableApiPayload}
				tableApi={getPartitionLatencyOverview}
				validConfigPresent
			/>
		</div>
	);
}
export default MessagingQueueOverview;
