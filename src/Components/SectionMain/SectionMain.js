import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { sections } from '../../content/sections';
export class SectionMain extends React.Component {
	render() {
		return (
			<div className='section-main'>
				{sections.map(({ name, comp }) => (
					<Route key={`/${name}`} exact path={`/${name}`}>
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={1700}
								classNames='page'
								unmountOnExit>
								<div id='page' className='page'>{comp}</div>
							</CSSTransition>
						)}
					</Route>
				))}
				
				<Redirect to='/projects' />
			</div>
		);
	}
}

export default SectionMain;
