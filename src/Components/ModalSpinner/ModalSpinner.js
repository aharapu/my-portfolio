import React from 'react';
import './ModalSpinner.css';

const ModalSpinner = (props) => {
	return (
		<div id="modal-spinner" className={`${props.className}`}>
			<div id="spinner" className='ui active loader text'><h5>...loading</h5></div>
		</div>
	);
};

export default ModalSpinner;
