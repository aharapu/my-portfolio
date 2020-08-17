import React from 'react';

const ErrorMessage = ({className, text}) => {
	return (
		<div id='error-message' className={className}>
			<div id='message' className='ui text'>
				<h5>{text}</h5>
			</div>
		</div>
	);
};

ErrorMessage.defaultProps = {
	text: 'there was an error',
	className: 'CLASS-PROP-ERROR',
};

export default ErrorMessage;
