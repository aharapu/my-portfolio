import React from 'react';
import './LinkWithIcon.css';

const LinkWithIcon = (props) => {
	const name = props.info.fields.name;
	const iconUrl = props.info.fields.icon.fields.file.url;
	const linkUrl = props.info.fields.linkSrc;

	return (
		<a className='link-outside' href={linkUrl} target='_blank' rel='noopener noreferrer'>
			<h5>{name}</h5>
			<img src={iconUrl} alt={name}></img>
		</a>
	);
};

export default LinkWithIcon;
