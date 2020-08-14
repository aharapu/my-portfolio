import React from 'react';
import './LinkOutside.css';

const LinkOutside = (props) => {
	const {name, icon, linkSrc} = {...props.info }

	return (
		<a className='link-outside' href={linkSrc} target='_blank' rel='noopener noreferrer'>
			<h5>{name}</h5>
			<img src={icon.fields.file.url} alt={name}></img>
		</a>
	);
};

export default LinkOutside;
