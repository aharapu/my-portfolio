import React from 'react';
import { useRecoilState } from 'recoil';
import { Stagger, Fade } from 'react-animation-components';
import { linkData, apiErr } from '../../helpers/recoil-atoms';
import LinkOutside from '../LinkOutside/LinkOutside';
import ModalSpinner from '../ModalSpinner/ModalSpinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const SectionLinkOutside = () => {
	const [linkDataState] = useRecoilState(linkData);
	const [apiErrState] = useRecoilState(apiErr);
	
	if (!linkDataState && !apiErrState) {
		const loadingText = '...loading links';
		return <ModalSpinner className='sidebar-left' text={loadingText} />;
	}

	if (apiErrState) {
		const errorText = 'Oh, no! It crashed...';
		return <ErrorMessage className='sidebar-left' text={errorText} />;
	}
	return (
		<Stagger in delay={130} duration={1000} className='sidebar-left'>
			{linkDataState.items.map(({ sys, fields }) => (
				<Fade in  key={sys.id}>
					<LinkOutside info={fields} />
				</Fade>
			))}
		</Stagger>
	);
};

export default SectionLinkOutside;
