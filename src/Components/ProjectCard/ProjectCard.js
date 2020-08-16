import React from 'react';
import faker from 'faker';

const ProjectCard = (props) => {
	const { name, description, preview, technologies } = { ...props.cardData };

	return (
		<div className='project-card'>
			<div>
				<h3>{name}</h3>
				<img alt='project preview' src={preview.fields.file.url} />
			</div>
			<p>{description}</p>
			<ul>
				{technologies.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

ProjectCard.defaultProps = {
	cardData: {
		name: faker.lorem.word(),
		description: faker.lorem.words(300),
		preview: { fields: { file: { url: faker.image.animals() } } },
		technologies: faker.lorem.words(Math.ceil(Math.random() * 10)).split(' '),
	},
};

export default ProjectCard;
