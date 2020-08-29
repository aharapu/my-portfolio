import React, { useState } from 'react';

const ModalLanding = () => {
	const [isModalClicked, setIsModalClicked] = useState(false);
	const handleClick = (event) => {
        event.preventDefault();
		setIsModalClicked(true);
	};
	if (isModalClicked) return null;
	return (
		<div className='modal-landing' onClick={handleClick}>
			<h2 className='landing-warning'>Warning! This website is best viewed on a desktop!</h2>
			<h3 className='landing-title'>Welcome!</h3>
			<p className='landing-text'>
				Hi! I'm Valentin and this is my web-dev portfolio. If you like what you see and want to say
				hello, or maybe you have any questions, there is a contact form in the about
				section. Enjoy!
			</p>
            <h5>click anywhere to continue</h5>
		</div>
	);
};

export default ModalLanding;
