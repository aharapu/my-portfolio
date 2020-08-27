import React from 'react';
import { Link } from 'react-router-dom';
import { Stagger, Fade } from 'react-animation-components';

const NavBar = () => {
	return (
		<Stagger in delay={130} duration={1000} className='nav-bar'>
			<Fade in>
				<Link to='/about' className='nav-link'>
					about me
				</Link>
			</Fade>
			<Fade in>
				<Link to='/projects' className='nav-link'>
					projects
				</Link>
			</Fade>
			<Fade in>
				<Link to='/resume' className='nav-link'>
					résumé
				</Link>
			</Fade>
		</Stagger>
	);
};

export default NavBar;
