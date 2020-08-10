import React from 'react';

const ProjectCard = (props) => {
	const title = props.cardData.fields.name;
	const description = props.cardData.fields.description;
	const gifUrl = props.cardData.fields.preview.fields.file.url;
	const techList = props.cardData.fields.technologies;

	return (
		<div>
			<div>baga titlu aici {title}</div>
			<div>{description}</div>
			<ul>
				{techList.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			<img alt="project preview" src={gifUrl} height='100px' width='100px' />
		</div>
	);
};

export default ProjectCard;
