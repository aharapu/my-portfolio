import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useRecoilValue } from 'recoil';
import { Stagger, Fade } from 'react-animation-components';
import { projectDataState } from '../../App/App';
import { useLocation } from 'react-router-dom';

export const ProjectLinkList = ({ trigger, data }) => {
	return (
		<>
			{data.map(p => (
				<Link className='link-project' smooth to={`/projects#${p.sys.id}`}>
					{p.fields.name.toLowerCase()}
				</Link>
			))}
		</>
	);
};

const SectionLinkInside = () => {
	const projectData = useRecoilValue(projectDataState);
	const location = useLocation();
	const isProjectsRouted = location.pathname === '/projects';
	const isAboutRouted = location.pathname === '/about';
	const isResumeRouted = location.pathname === '/resume';

	return (
		<div className='sidebar-right'>
			{projectData && isProjectsRouted ? (
				<Fade in className='route-link-list'>
					<h4 className='link-list-title'>Projects:</h4>
					<ProjectLinkList trigger={isProjectsRouted} data={projectData.items} />{' '}
				</Fade>
			) : null}
			{isAboutRouted ? (
				<Fade className='route-text-desc' in={isAboutRouted}>
					Read all about me in this section.
				</Fade>
			) : null}
			{isResumeRouted ? (
				<Fade className='route-text-desc' in={isResumeRouted}>
					Check out my amazing resume!
				</Fade>
			) : null}
		</div>
	);
};

export default SectionLinkInside;
