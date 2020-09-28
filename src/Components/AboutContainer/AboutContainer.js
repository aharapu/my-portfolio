import React from 'react';
import emailjs from 'emailjs-com';
import ReactMarkdown from 'react-markdown';
import { useRecoilValue } from 'recoil';
import { aboutData } from '../../helpers/recoil-atoms';
import { ABOUT_ANCHORS } from '../../helpers/constants';

const AboutContainer = () => {
	const aboutDataState = useRecoilValue(aboutData);

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
	if (!aboutDataState) return null;
	return (
		<div className='about-container'>
			<h3 id={ABOUT_ANCHORS.data[0].id} className='about-title'>A little history</h3>
			<img
				className='valentin'
				src={aboutDataState.includes.Asset[0].fields.file.url}
				alt='portrait'
			/>
			<ReactMarkdown source={aboutDataState.items[0].fields.description} />
			<section id={ABOUT_ANCHORS.data[1].id} id='contact' className='contact'>
				<h3>Get In Touch</h3>
				<p>
					Send me an email using the form below and I will try and respond as soon as I
					can.
				</p>
				<form className='ui form' onSubmit={sendEmail}>
					<input type='hidden' name='to_name' value='Valentin' />
					<div className='field'>
						<label>Name</label>
						<input placeholder='Enter Name' type='text' name='from_name' />
					</div>
					<div className='field'>
						<label>Email*</label>
						<input placeholder='Enter Email' type='email' name='reply_to' required />
					</div>
					<div className='field'>
						<label>Message*</label>
						<textarea placeholder='Enter Message' name='message_html' minLength="20" required />
					</div>
					<input className='ui button send-btn' type='submit' value='Send' />
				</form>
			</section>
		</div>
	);
};

export default AboutContainer;
