import React, { useRef, useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { sections } from '../../content/sections'
import SidebarRight from '../SidebarRight'

const pageWidth = document.body.offsetWidth

const SectionMain = () => {
	const sectionMainRef = useRef(null)
	const [refLoaded, setRefLoaded] = useState(false)

	useEffect(() => {
		if (sectionMainRef.current) setRefLoaded(true)
	}, [sectionMainRef])
	const scrollToTop = () => {
		if (refLoaded & pageWidth > 800) {
			sectionMainRef.current.scrollTo({ behavior: 'smooth', top: 0, left: 0 })
		}
		else window.scrollTo({ behavior: 'smooth', top: 50, left: 0 })
	}

	return (
		<div ref={sectionMainRef} className='section-main'>
			{sections.map(({ name, comp }, i) => (
				<Route key={`/${name}`} exact path={`/${name}`}>
					{({ match }) => (
						<CSSTransition
							in={match != null}
							timeout={500}
							classNames='page'
							onEntered={scrollToTop}
							unmountOnExit>
							<div className='page'>
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
