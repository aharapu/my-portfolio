import React from 'react'

const Section = (props) => {
    return (
        <div className={props.styleClass}>
            {props.children}
        </div>
    )
}

export default Section;
