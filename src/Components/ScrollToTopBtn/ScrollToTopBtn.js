import React, { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { isModalShownAtom, sectionMainElemAtom } from '../../helpers/recoil-atoms'

const pageWidth = document.body.offsetWidth

const ScrollToTopBtn = () => {
    const isModalShown = useRecoilValue(isModalShownAtom)
    const sectionMainElem = useRecoilValue(sectionMainElemAtom)
    const btnRef = useRef(null)

    useEffect(() => {
        if (!sectionMainElem) return

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

    if (!isModalShown) return (
        <div ref={btnRef} className='scroll-to-top-btn' onClick={() => sectionMainElem.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })}>
            ^
        </div>
    )
    else return null
}

export default ScrollToTopBtn
