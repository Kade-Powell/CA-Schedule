import { UPDATE_SCHEDULE, SCHEDULE_ERROR } from '../actions/types';

const initialState = [
	{ timeSlot: '8am-9am', name: '', phoneNumber: '' },
	{ timeSlot: '9am-10am', name: '', phoneNumber: '' },
	{ timeSlot: '10am-11am', name: '', phoneNumber: '' },
	{ timeSlot: '11am-12am', name: '', phoneNumber: '' },
	{ timeSlot: '12am-1pm', name: '', phoneNumber: '' },
	{ timeSlot: '1pm-2pm', name: '', phoneNumber: '' },
	{ timeSlot: '2pm-3pm', name: '', phoneNumber: '' },
	{ timeSlot: '3pm-4pm', name: '', phoneNumber: '' },
	{ timeSlot: '4pm-5pm', name: '', phoneNumber: '' },
];

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_SCHEDULE:
			//finding index of the item
			const index = state.findIndex(
				(appointment) => appointment.timeSlot === payload.timeSlot
			);
			//copying state and changing
			const newArray = [...state];
			newArray[index] = payload;
			//return new array as the state
			return newArray;

		case SCHEDULE_ERROR:
			return state;

		default:
			return state;
	}
}
