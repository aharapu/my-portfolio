import React from 'react';
import './LinkWithIcon.css';

const LinkWithIcon = (props) => {
	const name = props.info.fields.name;
	const imgUrl = props.info.fields.icon.fields.file.url;
	const linkUrl = props.info.fields.linkSrc;

	return (
		<a className='link-outside' href={linkUrl} target='_blank'>
			<h5>{name}</h5>
			<img alt={name} src={imgUrl} />
		</a>
	);
};

export default LinkWithIcon;
