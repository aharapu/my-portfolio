import React from 'react';
import faker from 'faker';
import { useRecoilValue } from 'recoil';
import { projectDataState, apiErr } from '../../App'
import ProjectCard from '../ProjectCard';
import ModalSpinner from '../ModalSpinner';
import ErrorMessage from '../ErrorMessage';

const ProjectsContainer = () => {
	const projectData = useRecoilValue(projectDataState);
	const apiErrState = useRecoilValue(apiErr);

	if (!projectData && !apiErrState) {
		const loadingText = '...loading content';
		return <ModalSpinner text={loadingText} />;
	}

	if (apiErrState) {
		const errorText = '...there was an error, but it works on my machine';
		return <ErrorMessage text={errorText} />;
	}
	return (
		<>
			<h2 className='projects-container-title'>My Projects</h2>
			<p className="projects-container-description">{faker.lorem.sentences(5)}</p>
			<div className='project-container-cards'>
				{projectData.items.map((project) => (
					<ProjectCard id={project.sys.id} key={project.sys.id} cardData={project.fields} />
				))}
			</div>
			<div id='somewhere'>i am somewhere</div>
		</>
	);
};

export default ProjectsContainer;