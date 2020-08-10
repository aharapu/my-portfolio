import React, { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard'
import './SectionMain.css';

const SectionMain = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [projectData, setProjectData] = useState(null);

	if (isLoading) {
		const contentful = require('contentful');
		const client = contentful.createClient({
			// This is the space ID. A space is like a project folder in Contentful terms
			space: 'al1ikk93hxev',
			// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
			accessToken: 'MGR6ZpY44sfKOtgk33ias_3tZmj0yip5rv2zJfA0kHw',
		});
		// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
		client
			.getEntries({
				content_type: 'projectCard',
			})
			.then((entries) => {
				setProjectData(entries);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));

		return <div>wait for it...</div>;
	}


	return (
		<div className='section-main'>
            {projectData.items.map(project => <ProjectCard key={project.sys.id} cardData={project}/>)}
		</div>
	);
};

export default SectionMain;
