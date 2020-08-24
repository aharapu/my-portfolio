import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import ProjectsContainer from '../ProjectsContainer';
export class SectionMain extends React.Component {
	render() {
		return (
			<div className='section-main'>
				<Route key='/about' exact path='/about'>
					{({ match }) => (
						<CSSTransition
							in={match != null}
							timeout={700}
							classNames='page'
							unmountOnExit>
							<div className='page'>about and contact form</div>
						</CSSTransition>
					)}
				</Route>
				<Route key='/background' exact path='/background'>
					{({ match }) => (
						<CSSTransition
							in={match != null}
							timeout={700}
							classNames='page'
							unmountOnExit>
							<div className='page'>background</div>
						</CSSTransition>
					)}
				</Route>
				<Route exact path='/projects'>
					{({ match }) => (
						<CSSTransition
							in={match != null}
							timeout={700}
							classNames='page'
							unmountOnExit>
							<div className='page'>
								<ProjectsContainer />
							</div>
						</CSSTransition>
					)}
				</Route>
				<Redirect to='/projects' />
			</div>
		);
	}
}

export default SectionMain;
