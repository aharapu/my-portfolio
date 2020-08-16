import React from 'react';
import faker from 'faker';
import callContentful from '../../helpers/callContentful';
import ProjectCard from '../ProjectCard';
import ModalSpinner from '../ModalSpinner';
import ErrorMessage from '../ErrorMessage';

export class ProjectsContainer extends React.Component {
	state = { projectData: null, err: null };

	async componentDidMount() {
		const data = await callContentful('projectCard');
		this.setState({ projectData: data });
	}

	render() {
		if (!this.state.projectData && !this.state.err) {
			const loadingText = '...loading content';
			return <ModalSpinner text={loadingText} />;
		}

		if (this.state.err) {
			const errorText = '...there was an error, but it works on my machine';
			return <ErrorMessage text={errorText} />;
		}
		return (
			<>
				<h2 className='projects-container-title'>My Projects</h2>
				<p>{faker.lorem.sentences()}</p>
				<div className='project-container-cards'>
					{this.state.projectData.items.map((project) => (
						<ProjectCard key={project.sys.id} cardData={project} />
					))}
				</div>
			</>
		);
	}
}

export default ProjectsContainer;
