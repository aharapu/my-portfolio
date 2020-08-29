import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Stagger, Fade } from 'react-animation-components';
import { sections } from '../../content/sections';

const NavBar = () => {
	return (
		<Stagger in delay={130} duration={1000} className='nav-bar'>
			{sections.map(({ id, name, text }) => (
				<Fade in key={id}>
					<Link to={`/${name}#top`} className='nav-link'>
						{text}
					</Link>
				</Fade>
			))}
		</Stagger>
	);
};

export default NavBar;
