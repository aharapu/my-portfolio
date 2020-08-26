import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Stagger, Fade } from 'react-animation-components';
import { projectDataState } from '../../App'


const SectionLinkInside = () => {
	const projectData = useRecoilValue(projectDataState);

	return (
		<div className='section-link-inside'>
			<div className='container-link-project'>
				{projectData ? <Link className='link-project' to={`/projects/#${projectData.items[2].sys.id}`}>go to project</Link> : null}
				{projectData ? (<Link to={{ pathname: "/projects", search: "", hash: `#${projectData.items[2].sys.id}`, state: { fromSideLink: true } }} >go with obj</Link> ) : null}

				<a className='link-project' href='#somewhere'>
					i stay on the right	
				</a>
				<a className='link-project' href='#somewhere'>
					and another project
				</a>
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
