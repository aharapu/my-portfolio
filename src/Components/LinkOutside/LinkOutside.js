import React from 'react';
import faker from 'faker';
export class LinkOutside extends React.PureComponent {
	render() {
		const { name, icon, linkSrc } = { ...this.props.info };
		return (
			<a className='link-outside' href={linkSrc} target='_blank' rel='noopener noreferrer'>
				<h5>{name}</h5>
				<img src={icon.fields.file.url} alt={name}></img>
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
