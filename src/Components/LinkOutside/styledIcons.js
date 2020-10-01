import React from 'react'
import styled from 'styled-components'
import Icon from '../../helpers/Icon'

const Svg = styled(Icon)` 
  width: 32px; 
  height: 32px;
`

export const Github = styled(({ className }) => ( 
  <Svg viewBox="0 0 1024 1024" className={className}>   
    <path
	  fill="currentColor"
	  fillRule="evenodd"
	  clipRule="evenodd"
	  transform="scale(64)"
      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
    /> 
  </Svg>
))`   
color: ${props => props.color};
`

export const Coroflot = styled(({ className }) => ( 
    <Svg viewBox="0 0 196 196" preserveAspectRatio="xMidYMid meet" className={className}>   
        <g transform="translate(0,196) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
            <path d="M976 1929 c-201 -21 -390 -109 -542 -252 -148 -140 -224 -269 -280
                -477 -27 -100 -25 -338 4 -450 43 -165 136 -326 256 -445 316 -312 804 -361
                1179 -119 73 48 217 179 217 198 0 6 -36 47 -80 91 l-80 80 -83 -80 c-183
                -179 -429 -245 -672 -181 -187 50 -355 187 -449 365 -58 112 -71 168 -70 326
                0 127 2 147 27 220 82 234 258 401 492 466 94 26 248 31 334 9 139 -33 272
                -110 364 -209 l54 -59 84 84 83 83 -30 38 c-43 53 -149 141 -225 186 -170 100
                -385 147 -583 126z"/>
            <path d="M818 1313 c-34 -29 -77 -76 -92 -101 -6 -11 19 -42 100 -123 l109
                -109 -109 -109 -109 -109 22 -30 c27 -39 112 -113 123 -110 5 2 56 51 114 108
                l104 105 109 -109 110 -109 25 16 c36 24 105 97 112 120 4 14 -18 43 -93 118
                -54 55 -99 105 -101 112 -1 7 43 57 98 112 55 55 100 105 100 112 0 17 -116
                133 -132 133 -7 0 -60 -47 -118 -105 l-105 -105 -105 105 c-58 58 -110 105
                -117 105 -6 0 -26 -12 -45 -27z"/>
        </g> 
    </Svg>
))`   
color: ${props => props.color};
`

export const Instagram = styled(({ className }) => ( 
    <Svg viewBox="0 0 512 512" className={className}>   
        <path
            fill="currentColor"
            d="M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z"/>
        <path
            fill="currentColor"
            d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z"/>
        <circle
            fill="currentColor"
            cx="390.476" cy="121.524" r="30.23"/> 
    </Svg>
))`   
color: ${props => props.color};
`

export const LinkedIn = styled(({ className }) => ( 
    <Svg viewBox="0 0 24 24" className={className}>   
        <path
            fill="currentColor"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
        /> 
    </Svg>
))`   
color: ${props => props.color};
`

export default {
    coroflot: <Coroflot />,
    instagram: <Instagram />,
    github: <Github />,
    linkedIn: <LinkedIn />
}


    