import React from 'react'
import { Link } from 'react-router-dom'
import { Stagger, Fade } from 'react-animation-components'
import { sections } from '../../content/sections'

const NavBar = () => {
	return (
			<Stagger in delay={130} duration={1000} className='nav-bar'>
				{sections.map(({ id, name, text }) => (
					<Fade className='link-fade-wrap' in key={id}>
						<Link
							to={`/${name}`}
							className='nav-link'
							>
							{text}
						</Link>
					</Fade>
				))}
			</Stagger>
	);
};

export default NavBar
