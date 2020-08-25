import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import ProjectsContainer from '../ProjectsContainer';
import AboutContainer from '../AboutContainer';
import ResumeContainer from '../ResumeContainer';
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
							<div className='page'>
								<AboutContainer />
							</div>
						</CSSTransition>
					)}
				</Route>
				<Route key='/resume' exact path='/resume'>
					{({ match }) => (
						<CSSTransition
							in={match != null}
							timeout={700}
							classNames='page'
							unmountOnExit>
							<div className='page'>
								<ResumeContainer />
							</div>
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
