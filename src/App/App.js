import React from 'react';
import Section from '../Section/Section';
import LinkWithIcon from '../LinkWithIcon/LinkWithIcon';
import './App.css';

const App = () => {
	return (
		<>
			<Section styleClass='section-header'>
				<h2>Valentin's WebDev Portfolio.</h2>
			</Section>
			<Section styleClass='section-link-outside'>
				<LinkWithIcon linkText='wawawiwa' />
				<LinkWithIcon linkText='omgwha' />
				<LinkWithIcon linkText='wawawiwa' />
				<LinkWithIcon linkText='wawawiwa' />
				<LinkWithIcon linkText='wawawiwa' />
			</Section>
			<Section styleClass='section-main'></Section>
			<Section styleClass='section-link-inside'>
                <a href="#" className="link-inside">/about-me\</a>
                <a href="#" className="link-inside">/projects\</a>
                <a href="#" className="link-inside">/background\</a>
            </Section>
			<Section styleClass='section-footer'>
				<h4>Made with ❤️️ by Valentin. ©️2020</h4>
			</Section>
		</>
	);
};

export default App;
