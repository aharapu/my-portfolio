import React, { useRef, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { sectionMainElemAtom, transitionReverseAtom } from '../../helpers/recoil-atoms'
import { CSSTransition } from 'react-transition-group';
import { sections } from '../../content/sections';
import SidebarRight from '../SidebarRight';

const SectionMain = () => {
	const setSectionMainElem = useSetRecoilState(sectionMainElemAtom)
	const isReverse = useRecoilValue(transitionReverseAtom)
	const sectionMainRef = useRef(null)
	useEffect(() => {
		if (!sectionMainRef.current)
		console.log('in sec main, about to set state with ref')
		setSectionMainElem(sectionMainRef.current)
	}, [sectionMainRef])
	return (
		<div ref={sectionMainRef} className='section-main'>
			{sections.map(({ name, comp }) => (
				<Route key={`/${name}`} exact path={`/${name}`}>
					{({ match }) => (
						<CSSTransition
							in={match != null}
							timeout={1700}
							classNames={isReverse ? 'page-reverse' : 'page'}
							unmountOnExit>
							<div id='page' className='page'>
								{comp}
							</div>
						</CSSTransition>
					)}
				</Route>
			))}

			<Redirect to='/projects' />
			<SidebarRight />
		</div>
	);
}

export default SectionMain;
