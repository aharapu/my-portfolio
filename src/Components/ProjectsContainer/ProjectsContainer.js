import React from 'react';
import { useRecoilValue } from 'recoil';
import { projectDataState, apiErr } from '../../helpers/recoil-atoms';
import ProjectCard from '../ProjectCard';
import ModalSpinner from '../ModalSpinner';
import ErrorMessage from '../ErrorMessage';
import { PROJECT_DESC } from '../../content/projects'

const ProjectsContainer = () => {
	const projectData = useRecoilValue(projectDataState);
	const apiErrState = useRecoilValue(apiErr);

	if (!projectData && !apiErrState) {
		const loadingText = '...loading content';
		return <ModalSpinner className='modal-spinner at80vh' text={loadingText} />;
	}

	if (apiErrState) {
		const errorText = '...there was an error, but it works on my machine';
		return <ErrorMessage text={errorText} />;
	}
	return (
		<>
			<h2 className='projects-container-title'>My Projects</h2>
			<p className='projects-container-description'>{PROJECT_DESC}</p>
			<div className='project-container-cards'>
				{projectData.items.map(({sys, fields}) => (
					<ProjectCard
						id={sys.id}
						key={sys.id}
						cardData={fields}
					/>
				))}
			</div>
			<div id='somewhere'>i am somewhere. you found me</div>
		</>
	);
};

export default ProjectsContainer;
