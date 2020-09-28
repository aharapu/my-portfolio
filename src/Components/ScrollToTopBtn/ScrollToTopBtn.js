import React, { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { isModalShownAtom, sectionMainElemAtom } from '../../helpers/recoil-atoms'

const pageWidth = document.body.offsetWidth

const ScrollToTopBtn = () => {
    const isModalShown = useRecoilValue(isModalShownAtom)
    const sectionMainElem = useRecoilValue(sectionMainElemAtom)
    const btnRef = useRef(null)

    useEffect(() => { //scroll section container only in tablet-wide/pc view
        if (!sectionMainElem) return
        if (pageWidth < 800) return
        const scrollFunction = () => {
            if (sectionMainElem.scrollTop > 600) {
                btnRef.current.style.display = "block";
            } else {
                btnRef.current.style.display = "none";
            }
        }

        sectionMainElem.addEventListener('scroll', scrollFunction)
        return () => {
            sectionMainElem.removeEventListener('scroll', scrollFunction)
        }
    }, [sectionMainElem])

    useEffect(() => { //scroll window when in mobile view
        if (pageWidth >= 800) return
        const scrollFunction = () => {
            if (window.scrollY > 600) {
                btnRef.current.style.display = "block";
            } else {
                btnRef.current.style.display = "none";
            }
        }

        window.addEventListener('scroll', scrollFunction)
        return () => {
            window.removeEventListener('scroll', scrollFunction)
        }
    }, [])

    const handleScroll = () => {
        if (pageWidth >= 800) sectionMainElem.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        else window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
    }

    if (!isModalShown) return (
        <div ref={btnRef} className='scroll-to-top-btn' onClick={handleScroll}>
            ^
        </div>
    )
    else return null
}

export default ScrollToTopBtn
