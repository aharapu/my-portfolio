import React from 'react';

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
	text: 'there was an error',
	className: 'CLASS-PROP-ERROR',
};

export default ModalSpinner;
