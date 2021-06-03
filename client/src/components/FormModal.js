import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';

const ModalForm = ({ show, setShow, currentSlot, updateSchedule }) => {
	//set local state to be whats passed in from redux
	const [formData, setFormData] = useState({
		timeSlot: currentSlot.timeSlot,
		name: currentSlot.name,
		phoneNumber: currentSlot.phoneNumber,
	});
	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	//keep local state local until user submits form
	const onSubmit = (e) => {
		e.preventDefault();
		setShow(false);
		//update redux state
		updateSchedule(formData);
	};

	return (
		<Modal show={show} onHide={() => setShow(false)}>
			<Modal.Header>
				<Modal.Title>{currentSlot.timeSlot}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form onSubmit={(e) => onSubmit(e)}>
					<label htmlFor='name'>Name:</label>
					<input
						required
						className='form-control'
						name='name'
						id='name'
						value={formData.name}
						onChange={(e) => onChange(e)}
						placeholder='Kade Powell'
					/>
					<label htmlFor='phoneNumber'>Phone Number:</label>
					<input
						required
						className='form-control'
						name='phoneNumber'
						id='phoneNumber'
						placeholder='478-796-4033'
						pattern='^\d{3}-\d{3}-\d{4}$'
						title='XXX-XXX-XXXX'
						value={formData.phoneNumber}
						onChange={(e) => onChange(e)}
					/>
					<Modal.Footer>
						<button type='submit' className='btn btn-outline-primary'>
							Save
						</button>
					</Modal.Footer>
				</form>
			</Modal.Body>
		</Modal>
	);
};

ModalForm.propTypes = {
	show: PropTypes.bool.isRequired,
	setShow: PropTypes.func.isRequired,
	currentSlot: PropTypes.object.isRequired,
	updateSchedule: PropTypes.func.isRequired,
};

export default ModalForm;
