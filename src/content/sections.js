import React from 'react';
import ProjectsContainer from '../Components/ProjectsContainer';
import AboutContainer from '../Components/AboutContainer';
import ResumeContainer from '../Components/ResumeContainer';

export const sections = [
	{
		id: 0,
		name: 'about',
		text: 'about',
		comp: <AboutContainer />,
	},
	{
		id: 1,
		name: 'projects',
		text: 'projects',
		comp: <ProjectsContainer />,
	},
	{
		id: 2,
		name: 'resume',
		text: 'résumé',
		comp: <ResumeContainer />,
	},
];
