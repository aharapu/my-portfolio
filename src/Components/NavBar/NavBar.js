import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Stagger, Fade } from 'react-animation-components';
import { sections } from '../../content/sections';

const NavBar = () => {
	return (
		<Stagger in delay={130} duration={1000} className='nav-bar'>
			{sections.map(({ id, name, text }) => (
				<Fade className='link-fade-wrap' in key={id}>
					<Link
						to={`/${name}#page`}
						smooth
						className='nav-link'
						scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
						>
						{text}
					</Link>
				</Fade>
			))}
		</Stagger>
	);
};

export default NavBar;
