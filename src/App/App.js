import React from 'react';
import faker from 'faker';
import Section from '../Section/Section';
import SectionLinkOutside from '../SectionLinkOutside/SectionLinkOutside';
import LinkWithIcon from '../LinkWithIcon/LinkWithIcon';
import './App.css';

const App = () => {
    console.log(faker.image.image());
    
    

	return (
		<>
			<Section styleClass='section-header'>
				<h2>Valentin's WebDev Portfolio.</h2>
			</Section>
			<SectionLinkOutside styleClass='section-link-outside'>
				<LinkWithIcon linkText='wawawiwa' />
				<LinkWithIcon linkText='omgwha' />
				<LinkWithIcon linkText='wawawiwa' />
				<LinkWithIcon linkText='wawawiwa' />
				<LinkWithIcon linkText='wawawiwa' />
			</SectionLinkOutside>
			<Section styleClass='section-main'></Section>
			<Section styleClass='section-link-inside'>
				<a href='#' className='link-inside'>
					/about-me\
				</a>
				<a href='#' className='link-inside'>
					/projects\
				</a>
				<a href='#' className='link-inside'>
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
