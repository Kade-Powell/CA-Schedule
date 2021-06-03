import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSchedule } from '../actions/schedule';
import Table from 'react-bootstrap/Table';
//My Components
import FormModal from './FormModal';

const ScheduleTable = ({ schedule, updateSchedule }) => {
	//set some local state and functions for modal
	const [show, setShow] = useState(false);
	const [current, setCurrent] = useState({});

	const launchModal = (slotData) => {
		setShow(true);
		setCurrent(slotData);
	};
	//generate rows for table
	let rows = [];
	for (let i = 0; i < schedule.length; i++) {
		//set style var depending on if this entry has data
		let style;
		if (schedule[i].name && schedule[i].phoneNumber) {
			style = 'booked';
		}
		// generate the rows based on state
		rows.push(
			<tr key={i} onClick={() => launchModal(schedule[i])} className={style}>
				<td>{schedule[i].timeSlot} </td>
				<td>{schedule[i].name}</td>
				<td>{schedule[i].phoneNumber}</td>
			</tr>
		);
	}
	return (
		<Fragment>
			<Table responsive striped bordered hover>
				<thead>
					<tr>
						<th>Time Slot</th>
						<th>Name</th>
						<th>Phone Number</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>

			{show ? (
				<FormModal
					show={show}
					setShow={setShow}
					currentSlot={current}
					updateSchedule={updateSchedule}
				/>
			) : (
				''
			)}
		</Fragment>
	);
};

ScheduleTable.propTypes = {
	schedule: PropTypes.array.isRequired,
	updateSchedule: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	schedule: state.schedule,
});

export default connect(mapStateToProps, { updateSchedule })(ScheduleTable);
