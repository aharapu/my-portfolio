import React from 'react';
import emailjs from 'emailjs-com';

const AboutContainer = () => {
	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm('gmail', 'template_RzMhP9ra', e.target, process.env.REACT_APP_EMAILJS_USERID)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				},
			);
	};
	return (
		<div>
			<form className='contact-form' onSubmit={sendEmail}>
				<input type='hidden' name='to_name' value='vasilescu' />
				<label>Name</label>
				<input type='text' name='from_name' />
				<label>Email</label>
				<input type='email' name='reply_to' />
				<label>Message</label>
				<textarea name='message_html' />
				<input type='submit' value='Send' />
			</form>
		</div>
	);
};

export default AboutContainer;
