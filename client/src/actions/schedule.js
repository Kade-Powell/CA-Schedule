import { SCHEDULE_ERROR, UPDATE_SCHEDULE } from '../actions/types';

//update the schedule
export const updateSchedule = (formData) => (dispatch) => {
	try {
		dispatch({
			type: UPDATE_SCHEDULE,
			payload: formData,
		});
	} catch (err) {
		alert(err);
		dispatch({
			type: SCHEDULE_ERROR,
			payload: err,
		});
	}
};
