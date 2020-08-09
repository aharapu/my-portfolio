import React from 'react';
import './LinkWithIcon.css';

const LinkWithIcon = (props) => {
	return (
		<a className='link-outside' href='//#endregion'>
			<h5>{props.linkText}</h5>
			<img alt='no pic' src='' />
		</a>
	);
};

export default LinkWithIcon;
