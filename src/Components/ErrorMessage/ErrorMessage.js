import React from 'react';

const ErrorMessage = (props) => {
	return (
		<div id='error-message' className={`${props.className}`}>
			<div id='message' className='ui text'>
				<h5>{props.text}</h5>
			</div>
		</div>
	);
};

ErrorMessage.defaultProps = {
	text: 'there was an error',
};

export default ErrorMessage;
