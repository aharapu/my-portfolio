import React, { useRef, useEffect, createRef, useLayoutEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil'
import { sectionMainElemAtom, transitionReverseAtom, pageContainerAtom } from '../../helpers/recoil-atoms'
import { CSSTransition } from 'react-transition-group';
import { sections } from '../../content/sections';
import SidebarRight from '../SidebarRight';

const SectionMain = () => {
	const isReverse = useRecoilValue(transitionReverseAtom)
	const setSectionMainElem = useSetRecoilState(sectionMainElemAtom)
	const setPageContainerElem = useSetRecoilState(pageContainerAtom)
	const sectionMainRef = useRef(null)
	const pageContainerRef = useRef(null)

	useEffect(() => {
		if (sectionMainRef.current) setSectionMainElem(sectionMainRef.current)
		if (pageContainerRef.current) setPageContainerElem(pageContainerRef.current)
	}, [sectionMainRef, pageContainerRef])

	// useEffect(() => {
	// 	if (!pageContainerRef.current) return
	// 	setPageContainerElem(pageContainerRef.current)
	// }, [pageContainerRef])


	return (
		<div ref={sectionMainRef} className='section-main'>
			<div ref={pageContainerRef} className='page-container'>
				{sections.map(({ name, comp }, i) => (
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
			</div>
			<Redirect to='/projects' />
			<SidebarRight />
		</div>
	);
}

export default SectionMain;
