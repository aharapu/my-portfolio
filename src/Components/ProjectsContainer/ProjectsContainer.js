import React from 'react';
import faker from 'faker';
import { useRecoilState } from 'recoil';
import { projectData, apiErr } from '../../App'
import ProjectCard from '../ProjectCard';
import ModalSpinner from '../ModalSpinner';
import ErrorMessage from '../ErrorMessage';

const ProjectsContainer = () => {
	const [projectDataState] = useRecoilState(projectData);
	const [apiErrState] = useRecoilState(apiErr);

	if (!projectDataState && !apiErrState) {
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
				{projectDataState.items.map((project) => (
					<ProjectCard key={project.sys.id} cardData={project.fields} />
				))}
			</div>
		</>
	);
};

export default ProjectsContainer;
