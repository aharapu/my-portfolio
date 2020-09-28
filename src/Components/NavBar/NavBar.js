import React, {useEffect, useRef} from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { transitionReverseAtom, sectionMainElemAtom, pageContainerAtom } from '../../helpers/recoil-atoms'
import { HashLink as Link } from 'react-router-hash-link';
import { Stagger, Fade } from 'react-animation-components';
import { sections } from '../../content/sections';
import { withRouter } from 'react-router'

const pageWidth = document.body.offsetWidth

const NavBar = ({history}) => {
	const setIsReverse = useSetRecoilState(transitionReverseAtom)
	const sectionMainElem = useRecoilValue(sectionMainElemAtom)
	const pageContainerElem = useRecoilValue(pageContainerAtom)
	const touchStart = useRef({})
	const lastTouchEvent = useRef(null)

	useEffect(() => {  // add swipe to change pages
		if (pageWidth > 1200) return
		document.addEventListener('touchstart', handleTouchStart)
		document.addEventListener('touchmove', handleTouchMove)
		document.addEventListener('touchend', handleTouchEnd)
		return () => {
			document.removeEventListener('touchstart', handleTouchStart)
			document.removeEventListener('touchmove', handleTouchMove)
			document.removeEventListener('touchend', handleTouchEnd)
		}
	}, [sectionMainElem])

	const handleTouchStart = (event) => {
		lastTouchEvent.current = event
		const firstTouch = event.touches[0]                                    
		touchStart.current.x = firstTouch.clientX;                                      
		touchStart.current.y = firstTouch.clientY;                                      
	}

	const handleTouchMove = (event) => {
		lastTouchEvent.current = event

		if (!pageContainerElem) return
		const touchCurrentX = event.touches[0].clientX
		const touchCurrentY = event.touches[0].clientY

		const deltaX = Math.abs(touchStart.current.x - touchCurrentX)
		const deltaY = Math.abs(touchStart.current.y - touchCurrentY)

		if ( deltaX > deltaY * 2 && deltaX > 10) {
			pageContainerElem.style.transform = `translateX(${((touchStart.current.x - touchCurrentX) * -1) / 3 }px)`
		}
	}

	const handleTouchEnd = (event) => {
		if ( !touchStart.current.x || !touchStart.current.y ) return
		
		pageContainerElem.style.transform = `translateX(0px)`

		const touchEndX = lastTouchEvent.current.touches[0].clientX
		const touchEndY = lastTouchEvent.current.touches[0].clientY

		const xDiff = Math.abs(touchStart.current.x - touchEndX)
		const yDiff = Math.abs(touchStart.current.y - touchEndY)

		if ( xDiff > yDiff && xDiff > 100) {
			
			const currentPagePath = history.location.pathname
			const pageIndex = sections.findIndex((section) => currentPagePath.includes(section.name) )

			let nextIndex
			if (touchEndX > touchStart.current.x) {		// swiped right
				setIsReverse(false)
				nextIndex = (pageIndex - 1 + sections.length) % sections.length
			} else {	// swiped left
				nextIndex = (pageIndex + 1 + sections.length) % sections.length
				setIsReverse(true)
			}

			history.push(`/${sections[nextIndex].name}`)
			sectionMainElem.scrollTo({ behavior: 'smooth', top: 0, left: 0 })
		}
	}

	// !! ATT - the <Link> scroll prop take the routed element as an argument. however, it is simply being used as a callback
	return (
			<Stagger in delay={130} duration={1000} className='nav-bar'>
				{sections.map(({ id, name, text }) => (
					<Fade className='link-fade-wrap' in key={id}>
						<Link
							to={`/${name}#page`}
							className='nav-link'
							scroll={() => sectionMainElem.scrollTo({ behavior: 'smooth', top: 0, left: 0 })}
							>
							{text}
						</Link>
					</Fade>
				))}
			</Stagger>
	);
};

export default withRouter(NavBar)
