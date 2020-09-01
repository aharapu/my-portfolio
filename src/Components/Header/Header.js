import React from 'react';
import NavBar from '../NavBar';
import { ReactComponent as Logo } from './logo-v05.svg';


export const Header = () => {
	return (
		<div className='header'>
			<div className='logo'>
				{/* <img src={logo} alt='logo' /> */}
				<Logo className='logo-component'/>
				<h2>Valentin's WebDev Portfolio.</h2>
			</div>
			<NavBar />
		</div>
	);
};

export default Header;
