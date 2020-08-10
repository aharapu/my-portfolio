import React from 'react';
import Section from '../Section/Section';
import SectionLinkOutside from '../SectionLinkOutside/SectionLinkOutside';
import SectionMain from '../SectionMain/SectionMain';
import './App.css';

const App = () => {
	return (
		<>
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
		</>
	);
};

export default App;
