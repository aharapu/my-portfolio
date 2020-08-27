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
				<Fade className='link-project' key={p.sys.id} in={trigger}>
					<Link smooth to={`/projects#${p.sys.id}`}>
						{p.fields.name.toUpperCase()}
					</Link>
				</Fade>
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
		<div className='section-link-inside'>
			<div className='container-link-project'>
				{projectData && isProjectsRouted ? (
					<ProjectLinkList trigger={isProjectsRouted} data={projectData.items} />
				) : null}
				{isAboutRouted ? (
					<Fade className='route-text-desc' in={isAboutRouted}>
						<div>Read all about me in this section.</div>
					</Fade>
				) : null}
				{isResumeRouted ? (
					<Fade className='route-text-desc' in={isResumeRouted}>
						<div>Check out my amazing resume!</div>
					</Fade>
				) : null}
			</div>
			<Stagger in delay={130} duration={1000} className='container-link-inside'>
				<Fade in>
					<Link to='/about'>
						<div className='link-inside'>about me</div>
					</Link>
				</Fade>
				<Fade in>
					<Link to='/projects'>
						<div className='link-inside'>projects</div>
					</Link>
				</Fade>
				<Fade in>
					<Link to='/resume'>
						<div className='link-inside'>résumé</div>
					</Link>
				</Fade>
			</Stagger>
		</div>
	);
};

export default SectionLinkInside;
