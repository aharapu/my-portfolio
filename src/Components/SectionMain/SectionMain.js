import React from 'react';
import ProjectCard from '../ProjectCard';
import ModalSpinner from '../ModalSpinner';
import './SectionMain.css';
export class SectionMain extends React.Component {
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
		return <ModalSpinner className='section-main'/>;
		if (!this.state.projectData && !this.state.err) {
			return <ModalSpinner />;
		}
		if (this.state.err) {
			console.log('loading error', this.state.err);
			return <div>huston, we have a problem</div>;
		}
		return (
			<div className='section-main'>
				{this.state.projectData.items.map((project) => (
					<ProjectCard key={project.sys.id} cardData={project} />
				))}
			</div>
		);
	}
}

export default SectionMain;
