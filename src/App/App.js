import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SectionLinkInside from '../Components/SectionLinkInside'
import SectionLinkOutside from '../Components/SectionLinkOutside';
import SectionMain from '../Components/SectionMain';
import './App.css';

const App = () => {
	return (
		<Router>
			<div className='section-header'>
				<h2>Valentin's WebDev Portfolio.</h2>
			</div>
			<SectionLinkOutside />
			<SectionMain />
			<SectionLinkInside />
			<div className='section-footer'>
				<h4>
					Made with{' '}
					<span role='img' aria-label='love'>
						❤️️
					</span>{' '}
					by Valentin. ©️2020
				</h4>
			</div>
		</Router>
	);
};

export default App;
