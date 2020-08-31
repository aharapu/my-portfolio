import React, { useRef } from 'react';
import faker from 'faker';
import linkIcon from './link-icon.svg';

export const Preview = ({ websiteUrl, githubRepo, linkIcon, preview }) => {
	const imageWrapRef = useRef(null);
	const projectLinkRef = useRef(null);
	const addProjectHover = event => {
		event.preventDefault();
		imageWrapRef.current.classList.add('preview-hover');
		projectLinkRef.current.classList.add('preview-hover');
	};
	const removeProjectHover = event => {
		event.preventDefault();
		imageWrapRef.current.classList.remove('preview-hover');
		projectLinkRef.current.classList.remove('preview-hover');
		console.log('event triggered');
	};
	return (
		<>
			<a
				onMouseEnter={addProjectHover}
				onMouseLeave={removeProjectHover}
				className='preview-link-wrap'
				href={websiteUrl}
				target='_blank'
				rel='noopener noreferrer'>
				<img
					ref={imageWrapRef}
					className='project-preview'
					alt='project preview'
					src={preview.fields.file.url}
				/>
			</a>
			<div className='project-card-links'>
				<a
					className='card-link'
					href={githubRepo}
					target='_blank'
					rel='noopener noreferrer'>
					<img className='link-icon' alt='link icon' src={linkIcon} />
					<h6 className='link-text'>GITHUB</h6>
				</a>
				<a
					ref={projectLinkRef}
					onMouseEnter={addProjectHover}
					onMouseLeave={removeProjectHover}
					className='card-link'
					href={websiteUrl}
					target='_blank'
					rel='noopener noreferrer'>
					<img className='link-icon' alt='link icon' src={linkIcon} />
					<h6 className='link-text'>WEBSITE</h6>
				</a>
			</div>
		</>
	);
};

const ProjectCard = ({ id, cardData }) => {
	const { name, description, preview, technologies, githubRepo, websiteUrl } = { ...cardData };

	return (
		<div id={id} className='project-card'>
			<h3>{name}</h3>
			<Preview
				websiteUrl={websiteUrl}
				githubRepo={githubRepo}
				linkIcon={linkIcon}
				preview={preview}
			/>
			<p>{description}</p>
			<div className='tech-stack'>
				<h5>Tech Stack:</h5>
				{technologies.map((item, index) => (
					<img
						key={index}
						alt='link icon'
						src={`${process.env.PUBLIC_URL}/assets/static/${item}.svg`}
					/>
				))}
			</div>
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
