import React from 'react';
import { Link } from 'react-router-dom';
import { Stagger, Fade } from 'react-animation-components';


const SectionLinkInside = () => {
	return (
		<Stagger in delay={130} duration={1000} className='section-link-inside'>
			<Fade in>
				<Link to='/about'>
					<div className='link-inside'>about me</div>
				</Link>
			</Fade>
			<Fade in>
				<Link to='/projects'>
					<div className='link-inside'>projects</div>
				</Link>
			</Fade>
			<Fade in>
				<Link to='/resume'>
					<div className='link-inside'>résumé</div>
				</Link>
			</Fade>
		</Stagger>
	);
};

export default SectionLinkInside;
