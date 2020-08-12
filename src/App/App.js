import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Section from '../Components/Section';
import SectionLinkOutside from '../Components/SectionLinkOutside';
import SectionMain from '../Components/SectionMain';
import './App.css';

const App = () => {
	return (
		<Router>
			<Section styleClass='section-header'>
				<h2>Valentin's WebDev Portfolio.</h2>
			</Section>
			<SectionLinkOutside />
			<SectionMain />
			<Section styleClass='section-link-inside'>
				<a href='http://localhost:3000/' className='link-inside'>
					/about-me\
				</a>
				<a href='http://localhost:3000/' className='link-inside'>
					/projects\
				</a>
				<a href='http://localhost:3000/' className='link-inside'>
					/background\
				</a>
			</Section>
			<Section styleClass='section-footer'>
				<h4>
					Made with{' '}
					<span role='img' aria-label='love'>
						❤️️
					</span>{' '}
					by Valentin. ©️2020
				</h4>
			</Section>
		</Router>
	);
};

export default App;
