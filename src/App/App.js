import React, { useEffect } from 'react';
import { atom, useRecoilState, useSetRecoilState } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import callContentful from '../helpers/callContentful';
import SectionLinkInside from '../Components/SectionLinkInside';
import SectionLinkOutside from '../Components/SectionLinkOutside';
import SectionMain from '../Components/SectionMain';
import Header from '../Components/Header';

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
			.then((res) => {
				setProjectDataState(res);
			})
			.catch((err) => {
				setApiErrState(err);
			});
		callContentful('link')
			.then((res) => {
				setLinkDataState(res);
			})
			.catch((err) => {
				setApiErrState(err);
			});
	}, [setProjectDataState, setLinkDataState, setApiErrState, ]);

	return (
		<Router>
			<Header />
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
