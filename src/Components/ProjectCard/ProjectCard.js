import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
	const title = props.cardData.fields.name;
	const description = props.cardData.fields.description;
	const gifUrl = props.cardData.fields.preview.fields.file.url;
	const techList = props.cardData.fields.technologies;

	return (
		<div className='project-card'>
			<div>
				<h3>{title}</h3>
				<img alt='project preview' src={gifUrl} />
			</div>
			<p>{description}</p>
			<ul>
				{techList.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default ProjectCard;
