import React from 'react';

const ModalSpinner = ({className, text}) => {
	return (
		<div className={`${className}`}>
			<div className='ui active loader text'>
				<h5>{text}</h5>
			</div>
		</div>
	);
};

ModalSpinner.defaultProps = {
	text: 'there was an error',
	className: 'CLASS-PROP-ERROR',
};

export default ModalSpinner;
