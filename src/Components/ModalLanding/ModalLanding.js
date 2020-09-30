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
		document.body.style.position = '';
		document.body.style.top = '';
		console.log('document.body.scrollHeight', document.body.scrollHeight)
		if (document.body.offsetWidth < 1200 && document.body.offsetWidth > 800 ) {
			// document.documentElement.scrollTo({x: 0,y: document.body.scrollHeight, behavior: 'smooth'})
			// document.documentElement.scrollTo({x: 0,y: 20, behavior: 'smooth'})
			// document.documentElement.requestFullscreen()
			return null
		}
		const scrollY = document.body.style.top;
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
