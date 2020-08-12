import React from 'react';
import { Link } from 'react-router-dom';
import './SectionLinkInside.css';

const SectionLinkInside = () => {
	return (
		<div className='section-link-inside'>
			<Link to='/about'>
				<div className='link-inside'>/about-me\</div>
			</Link>
			<Link to='/projects'>
				<div className='link-inside'>/projects\</div>
			</Link>
			<Link to='/background'>
				<div className='link-inside'>/background\</div>
			</Link>
		</div>
	);
};

export default SectionLinkInside;
