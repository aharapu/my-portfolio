import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProjectsContainer from '../ProjectsContainer';
import './SectionMain.scss';
export class SectionMain extends React.Component {
	render() {
		return (
			<div className='section-main'>
				<Switch>
					<Route path='/about'>
						<div>about</div>
					</Route>
					<Route path='/background'>
						<div>background</div>
					</Route>
					<Route path='/'>
						<ProjectsContainer />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default SectionMain;
