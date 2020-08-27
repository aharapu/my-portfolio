import React, { useEffect } from 'react';
import { atom, useRecoilState, useSetRecoilState } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import callContentful from '../helpers/callContentful';
import ModalLanding from '../Components/ModalLanding';
import Header from '../Components/Header';
import SidebarLeft from '../Components/SidebarLeft/SidebarLeft';
import SectionMain from '../Components/SectionMain';
import SidebarRight from '../Components/SidebarRight';
import Footer from '../Components/Footer';

export const linkData = atom({
	key: 'linkData',
	default: null,
});
export const projectDataState = atom({
	key: 'projectData',
	default: null,
});
export const apiErr = atom({
	key: 'apiErr',
	default: null,
});

const App = () => {
	const [, setLinkDataState] = useRecoilState(linkData);
	const setProjectDataState = useSetRecoilState(projectDataState);
	const [, setApiErrState] = useRecoilState(apiErr);
	useEffect(() => {
		callContentful('projectCard')
			.then(res => {
				setProjectDataState(res);
			})
			.catch(err => {
				setApiErrState(err);
			});
		callContentful('link')
			.then(res => {
				setLinkDataState(res);
			})
			.catch(err => {
				setApiErrState(err);
			});
	}, [setProjectDataState, setLinkDataState, setApiErrState]);

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
