import React from 'react';
import { useRecoilState } from 'recoil';
import { isModalShownAtom } from '../../helpers/recoil-atoms'

const ModalLanding = () => {
	const [isModalShown, setIsModalShown] = useRecoilState(isModalShownAtom);

	const handleClick = event => {
		event.preventDefault();
		setIsModalShown(false);
	};
	
	if (!isModalShown) {
		const scrollY = document.body.style.top;
		document.body.style.position = '';
		document.body.style.top = '';
		window.scrollTo(0, parseInt(scrollY || '0') * -1);
		return null;
	} 

	document.body.style.position = 'fixed';
	document.body.style.top = `-${window.scrollY}px`;

	return (
		<div className='modal-landing' onClick={handleClick}>
			<h3 className='landing-title'>Welcome!</h3>
			<p className='landing-text'>
				Hi! I'm Valentin and this is my web-dev portfolio. If you like what you see and want
				to say hello, or maybe you have any questions, there is a contact form in the about
				section. Enjoy!
			</p>
			<h5>click anywhere to continue</h5>
		</div>
	);
};

export default ModalLanding;
