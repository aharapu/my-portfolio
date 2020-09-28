import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import callContentful from '../helpers/callContentful';
import { linkData, projectDataState, apiErr, aboutData, quoteAtom } from '../helpers/recoil-atoms';
import ModalLanding from '../Components/ModalLanding';
import Header from '../Components/Header';
import SidebarLeft from '../Components/SidebarLeft/SidebarLeft';
import SectionMain from '../Components/SectionMain';
import SidebarRight from '../Components/SidebarRight';
import Footer from '../Components/Footer';
import ScrollToTopBtn from '../Components/ScrollToTopBtn'

let vh = window.innerHeight * 0.01

const App = () => {
	const [, setLinkDataState] = useRecoilState(linkData);
	const setProjectDataState = useSetRecoilState(projectDataState);
	const [, setApiErrState] = useRecoilState(apiErr);
	const setAboutDataState = useSetRecoilState(aboutData);
	const setQuoteData = useSetRecoilState(quoteAtom);
	useEffect(() => {
		callContentful('projectCard', 'fields.order')
			.then(res => {
				setProjectDataState(res);
			})
			.catch(err => {
				console.error(err);
				setApiErrState(err);
			});
		callContentful('link')
			.then(res => {
				setLinkDataState(res);
			})
			.catch(err => {
				setApiErrState(err);
			});
		callContentful('aboutSection')
			.then(res => {
				setAboutDataState(res);
			})
			.catch(err => {
				setApiErrState(err);
			});
		
		console.log('vh = ', vh)
		document.documentElement.style.setProperty('--vh', `${vh}px`)

	}, [setProjectDataState, setLinkDataState, setApiErrState, setAboutDataState, setQuoteData]);

	return (
		<Router>
			<Header />
			<SidebarLeft />
			<SectionMain>
				<SidebarRight />
			</SectionMain>
			<Footer />
			<ModalLanding />
			<ScrollToTopBtn />
		</Router>
	);
};

export default App;
