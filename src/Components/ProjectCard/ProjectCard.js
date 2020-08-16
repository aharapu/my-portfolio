import React from 'react';
import faker from 'faker';
import linkIcon from './link-icon.svg';

const ProjectCard = (props) => {
	const { name, description, preview, technologies, githubRepo, websiteUrl } = { ...props.cardData };
	console.log(props.cardData);

	return (
		<div className='project-card'>
			<div>
				<h3>{name}</h3>
				<img alt='project preview' src={preview.fields.file.url} />
			</div>
			<div className='project-card-links'>
				<a href={githubRepo} target='_blank' rel='noopener noreferrer'>
					<img alt='link icon' src={linkIcon} />
					GitHub
				</a>
				<a href={websiteUrl} target='_blank' rel='noopener noreferrer'>
					<img alt='link icon' src={linkIcon}/>
					Website
				</a>
			</div>
			<p>{description}</p>
			<ul>
				{technologies.map((item, index) => (
					<li key={index}><img style={{height: '20px'}} alt='link icon' src={`${process.env.PUBLIC_URL}/assets/static/${item}.svg`}/>{item}</li>
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
		githubRepo: 'http://www.github.com/aharapu',
		websiteUrl: 'http://www.github.com/aharapu'
	},
};

export default ProjectCard;
