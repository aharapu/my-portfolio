import React from 'react';
import './ModalSpinner.css';

const ModalSpinner = (props) => {
	return (
		<div id='modal-spinner' className={`${props.className}`}>
			<div id='spinner' className='ui active loader text'>
				<h5>{props.text}</h5>
			</div>
		</div>
	);
};

ModalSpinner.defaultProps = {
	text: '...loading',
};

export default ModalSpinner;
