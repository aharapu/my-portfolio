import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useRecoilValue } from 'recoil';
import { Fade } from 'react-animation-components';
import { projectDataState, quoteAtom } from '../../helpers/recoil-atoms';
import { useLocation } from 'react-router-dom';

const SectionQuote = ({ route, quoteData }) => {
	const { quote, author } = quoteData;

	return (
		<Fade className='route-text-desc' in={route}>
			<p>{quote}</p>
			<p>{author}</p>
			<span style={{zIndex:'50', fontSize:'0.9em', fontWeight: 'bold'}}>
				<img
					src='https://theysaidso.com/branding/theysaidso.png'
					height='20'
					width='20'
					alt='theysaidso.com'
				/>
				<a
					href='https://theysaidso.com'
					title='Powered by quotes from theysaidso.com'
					style={{color: '#ccc', marginLeft: '4px', verticalAlign: 'middle'}}>
					They Said So®
				</a>
			</span>
		</Fade>
	);
};

export const ProjectLinkList = ({ trigger, data }) => {
	return (
		<>
			{data.map(p => (
				<Link key={p.fields.name} className='link-project' smooth to={`/projects#${p.sys.id}`}>
					{p.fields.name.toLowerCase()}
				</Link>
			))}
		</>
	);
};

const SectionLinkInside = () => {
	const projectData = useRecoilValue(projectDataState);
	const quoteData = useRecoilValue(quoteAtom);
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
			{isAboutRouted && quoteData ? <SectionQuote route={isAboutRouted} quoteData={quoteData} /> : null}
			{isResumeRouted && quoteData ? <SectionQuote route={isResumeRouted} quoteData={quoteData} /> : null}
		</div>
	);
};

export default SectionLinkInside;
