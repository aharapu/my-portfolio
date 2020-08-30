import React, { useEffect } from 'react';
import { atom, useRecoilState, useSetRecoilState } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import callContentful from '../helpers/callContentful';
import { getQuote } from '../helpers/qouteAPI';
import {linkData, projectDataState, apiErr, aboutData, quoteAtom } from '../helpers/recoil-atoms';
import ModalLanding from '../Components/ModalLanding';
import Header from '../Components/Header';
import SidebarLeft from '../Components/SidebarLeft/SidebarLeft';
import SectionMain from '../Components/SectionMain';
import SidebarRight from '../Components/SidebarRight';
import Footer from '../Components/Footer';


// export const linkData = atom({
// 	key: 'linkData',
// 	default: null,
// });
// export const projectDataState = atom({
// 	key: 'projectData',
// 	default: null,
// });
// export const apiErr = atom({
// 	key: 'apiErr',
// 	default: null,
// });
// export const aboutData = atom({
// 	key: 'aboutData',
// 	default: null,
// });
// export const quoteAtom = atom({
// 	key: 'quoteAtom',
// 	default: null,
// });

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
		// getQuote()
		// 	.then(data => setQuoteData(data.contents.quotes[0]))
		// 	.catch(err => console.error(err));
	}, [setProjectDataState, setLinkDataState, setApiErrState, setAboutDataState, setQuoteData]);

	return (
		<Router>
			<Header />
			<SidebarLeft />
			<SectionMain />
			<SidebarRight />
			<Footer />
			<ModalLanding />
		</Router>
	);
};

export default App;
