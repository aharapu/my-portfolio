import React from 'react';
import { useRecoilState } from 'recoil';
import { linkData, apiErr } from '../../App';
import LinkOutside from '../LinkOutside';
import ModalSpinner from '../ModalSpinner';
import ErrorMessage from '../ErrorMessage';

const SectionLinkOutside = () => {
	const [linkDataState] = useRecoilState(linkData);
	const [apiErrState] = useRecoilState(apiErr);

	if (!linkDataState && !apiErrState) {
		const loadingText = '...loading links';
		return <ModalSpinner className='section-link-outside' text={loadingText} />;
	}

	if (apiErrState) {
		const errorText = 'Oh, no! It crashed...';
		return <ErrorMessage className='section-link-outside' text={errorText} />;
	}
	return (
		<div className='section-link-outside'>
			{linkDataState.items.map(({ sys, fields }) => (
				<LinkOutside key={sys.id} info={fields} />
			))}
		</div>
	);
};

export default SectionLinkOutside;
