import React, {useEffect, useRef} from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {  sectionMainElemAtom } from '../../helpers/recoil-atoms'
import { HashLink as Link } from 'react-router-hash-link';
import { Stagger, Fade } from 'react-animation-components';
import { sections } from '../../content/sections';

const pageWidth = document.body.offsetWidth

const NavBar = () => {
	const sectionMainElem = useRecoilValue(sectionMainElemAtom)

	// !! ATT - the <Link> scroll prop take the routed element as an argument. however, it is simply being used as a callback
	return (
			<Stagger in delay={130} duration={1000} className='nav-bar'>
				{sections.map(({ id, name, text }) => (
					<Fade className='link-fade-wrap' in key={id}>
						<Link
							to={`/${name}#page`}
							className='nav-link'
							scroll={(_) => sectionMainElem.scrollTo({ behavior: 'smooth', top: 0, left: 0 })}
							>
							{text}
						</Link>
					</Fade>
				))}
			</Stagger>
	);
};

export default NavBar
