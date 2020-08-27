import React from 'react';
import logo from './logo-v02.svg';
import NavBar from '../NavBar';

export const Header = () => {
	return (
		<div className='header'>
			<div className='logo'>
				<img src={logo} alt='logo' />
				<h2>Valentin's WebDev Portfolio.</h2>
			</div>
			<NavBar />
		</div>
	);
};

export default Header;
