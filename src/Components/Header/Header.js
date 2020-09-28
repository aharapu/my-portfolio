import React, {useEffect, useRef} from 'react';
import { useSetRecoilState } from 'recoil';
import { isModalShownAtom } from '../../helpers/recoil-atoms'
import NavBar from '../NavBar';
import { ReactComponent as Logo } from './logo-v05.svg';

const pageWidth = document.body.offsetWidth

export const Header = () => {
	const setIsModalShown = useSetRecoilState(isModalShownAtom)

	const headerElem = useRef(null)
	const prevScrollOffset = useRef(null)

	useEffect(() => {
		if (pageWidth > 800) return
		prevScrollOffset.current = window.pageYOffset
		window.addEventListener('scroll', handleWindowScroll)
		return () => {
			window.removeEventListener('scroll', handleWindowScroll)
		}
	}, [headerElem])

	const handleWindowScroll = (event) => {
		let currentScrollOffset = window.pageYOffset
		console.log('nav elem', headerElem.current)
		if (prevScrollOffset.current > currentScrollOffset) {
			headerElem.current.style.top = '0'
		  } else {
			headerElem.current.style.top = '-5rem'
		  }
		  prevScrollOffset.current = currentScrollOffset
	}

	return (
		<div ref={headerElem} className='header'>
			<div className='logo'>
				<Logo className='logo-component' onClick={() => setIsModalShown(true)} />
				<h2>Valentin's WebDev Portfolio.</h2>
			</div>
			<NavBar />
		</div>
	);
};

export default Header;
