import React from 'react';
import logo from './logo-v02.svg';

export const Header = () => {
	return (
		<div className='header'>
			<img src={logo} alt='logo' />
			<h2>Valentin's WebDev Portfolio.</h2>
		</div>
	);
};

export default Header;
