import React from 'react';
import faker from 'faker';
import linkIcon from './link-icon.svg';

const ProjectCard = ({ cardData }) => {
	const { name, description, preview, technologies, githubRepo, websiteUrl } = { ...cardData };

	return (
		<div className='project-card'>
			<h3>{name}</h3>
			<a className='preview-link-wrap' href={websiteUrl} target='_blank' rel='noopener noreferrer'>
				<img className="project-preview" alt='project preview' src={preview.fields.file.url} />
			</a>
			<div className='project-card-links'>
				<a className="card-link" href={githubRepo} target='_blank' rel='noopener noreferrer'>
					<img className="link-icon" alt='link icon' src={linkIcon} />
					<h6 className="link-text">GITHUB</h6>
				</a>
				<a className="card-link" href={websiteUrl} target='_blank' rel='noopener noreferrer'>
					<img className="link-icon" alt='link icon' src={linkIcon} />
					<h6 className="link-text">WEBSITE</h6>
				</a>
			</div>
			<p>{description}</p>
			<h5>Technology Stack</h5>
			<ul>
				{technologies.map((item, index) => (
					<li key={index}>
						<img
							alt='link icon'
							src={`${process.env.PUBLIC_URL}/assets/static/${item}.svg`}
						/>
					</li>
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
		websiteUrl: 'http://www.github.com/aharapu',
	},
};

export default ProjectCard;
