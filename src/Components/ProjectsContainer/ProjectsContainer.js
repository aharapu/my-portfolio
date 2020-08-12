import React from 'react';
import ProjectCard from '../ProjectCard';
import ModalSpinner from '../ModalSpinner';
import ErrorMessage from '../ErrorMessage';
import './ProjectsContainer.css';

export class ProjectsContainer extends React.Component {
	state = { projectData: null, err: null };

	componentDidMount() {
		const contentful = require('contentful');
		const client = contentful.createClient({
			space: 'al1ikk93hxev',
			accessToken: 'MGR6ZpY44sfKOtgk33ias_3tZmj0yip5rv2zJfA0kHw',
		});

		client
			.getEntries({
				content_type: 'projectCard',
			})
			.then((entries) => {
				this.setState({ projectData: entries });
			})
			.catch((err) => this.setState({ err: err }));
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
				{this.state.projectData.items.map((project) => (
					<ProjectCard key={project.sys.id} cardData={project} />
				))}
			</>
		);
	}
}

export default ProjectsContainer;
