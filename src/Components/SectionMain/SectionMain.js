import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProjectsContainer from '../ProjectsContainer';
export class SectionMain extends React.Component {
	render() {
		return (
			<div className='section-main'>
				<Switch>
					<Route exact path='/about'>
						<div>about</div>
					</Route>
					<Route exact path='/background'>
						<div>background</div>
					</Route>
					<Route exact path='/projects'>
						<ProjectsContainer />
					</Route>
					<Redirect to='/projects' />
				</Switch>
			</div>
		);
	}
}

export default SectionMain;
