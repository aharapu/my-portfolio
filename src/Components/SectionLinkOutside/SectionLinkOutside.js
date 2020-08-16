import React, { Component } from 'react';
import callContentful from '../../helpers/callContentful';
import LinkOutside from '../LinkOutside';
import ModalSpinner from '../ModalSpinner';
import ErrorMessage from '../ErrorMessage';
export default class SectionLinkOutside extends Component {
	state = { linkData: null, err: null };
	componentDidMount() {
		callContentful('link')
			.then((res) => {
				this.setState({ linkData: res });
			})
			.catch((err) => {
				this.setState({ err: err });
			});
	}
	render() {
		if (!this.state.linkData && !this.state.err) {
			const loadingText = '...loading links';
			return <ModalSpinner className='section-link-outside' text={loadingText} />;
		}

		if (this.state.err) {
			const errorText = 'Oh, no! It crashed...';
			return <ErrorMessage className='section-link-outside' text={errorText} />;
		}
		return (
			<div className='section-link-outside'>
				{this.state.linkData.items.map(({ sys, fields }) => (
					<LinkOutside key={sys.id} info={fields} />
				))}
			</div>
		);
	}
}
