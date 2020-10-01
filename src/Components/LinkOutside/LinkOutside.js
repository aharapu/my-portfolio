import React from 'react';
import faker from 'faker';
import icons from './styledIcons';

class LinkOutside extends React.PureComponent {
	render() {
		const { name, linkSrc } = { ...this.props.info };
		return (
			<a className='link-outside' href={linkSrc} target='_blank' rel='noopener noreferrer'>
				<h5>{name}</h5>
				{React.cloneElement(icons[name], { color: '#f6989a', className: 'styledIcon' })}
			</a>
		);
	}
}

LinkOutside.defaultProps = {
	info: {
		name: faker.lorem.word(),
		icon: { fields: { file: { url: faker.image.cats() } } },
		linkSrc: faker.internet.url(),
	},
};

export default LinkOutside;
