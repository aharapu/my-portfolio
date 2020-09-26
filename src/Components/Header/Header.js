import React from 'react';
import { useSetRecoilState } from 'recoil';
import { isModalShownAtom } from '../../helpers/recoil-atoms'
import NavBar from '../NavBar';
import { ReactComponent as Logo } from './logo-v05.svg';

export const Header = () => {
	const setIsModalShown = useSetRecoilState(isModalShownAtom)
	return (
		<div className='header'>
			<div className='logo'>
				<Logo className='logo-component' onClick={() => setIsModalShown(true)} />
				<h2>Valentin's WebDev Portfolio.</h2>
			</div>
			<NavBar />
		</div>
	);
};

export default Header;
