import React, { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import callContentful from '../helpers/callContentful';
import SectionLinkInside from '../Components/SectionLinkInside';
import SectionLinkOutside from '../Components/SectionLinkOutside';
import SectionMain from '../Components/SectionMain';

export const linkData = atom({
	key: 'linkData',
	default: null,
});
export const projectData = atom({
	key: 'projectData',
	default: null,
});
export const apiErr = atom({
	key: 'apiErr',
	default: null,
});

const App = () => {
	const [, setLinkDataState] = useRecoilState(linkData);
	const [, setProjectDataState] = useRecoilState(projectData);
	const [, setApiErrState] = useRecoilState(apiErr);
	useEffect(() => {
		callContentful('projectCard')
			.then((res) => {
				setProjectDataState(res);
				console.log(res);
			})
			.catch((err) => {
				setApiErrState(err);
			});
		callContentful('link')
			.then((res) => {
				setLinkDataState(res);
				console.log(res);
			})
			.catch((err) => {
				setApiErrState(err);
			});
	}, []);

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
