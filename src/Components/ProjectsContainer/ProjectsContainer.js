import React, { useRef, useEffect } from 'react';
import faker from 'faker';
import { useRecoilValue } from 'recoil';
import { projectDataState, apiErr } from '../../App'
import ProjectCard from '../ProjectCard';
import ModalSpinner from '../ModalSpinner';
import ErrorMessage from '../ErrorMessage';
import { useLocation } from "react-router-dom";

const ProjectsContainer = () => {
	const projectData = useRecoilValue(projectDataState);
	const apiErrState = useRecoilValue(apiErr);
	const thisRef = useRef(null);
	const location = useLocation();
	console.log('project container invoked');

	useEffect(() => {
		console.log(location.state);
		if (location.state) refClick();
		return () => {
			location.state = null;
		}
	}, [location.state])
	function refClick() {
		thisRef.current.scrollIntoView({behavior: 'smooth'});
	}

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
			<h2 className='projects-container-title' onClick={refClick}>My Projects</h2>
			<p className="projects-container-description">{faker.lorem.sentences(5)}</p>
			<div className='project-container-cards'>
				{projectData.items.map((project) => (
					<ProjectCard key={project.sys.id} cardData={project.fields} />
				))}
			</div>
			<div ref={thisRef}>i have the ref</div>
		</>
	);
};

export default ProjectsContainer;