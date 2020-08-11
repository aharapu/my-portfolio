import React from 'react';

const ProjectCard = (props) => {
	const title = props.cardData.fields.name;
	const description = props.cardData.fields.description;
	const gifUrl = props.cardData.fields.preview.fields.file.url;
	const techList = props.cardData.fields.technologies;

	return (
		<div>
			<div>baga titlu aici {title}</div>
			<div>{description}</div>
			<ul>
				{techList.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			<img alt='project preview' src={gifUrl} height='100px' width='100px' />
			<div className='ui card'>
				<div className='content'>
					<img
                        alt="wtf"
						className='right floated mini ui image'
						src='/images/avatar/large/elliot.jpg'
					/>
					<div className='header'>Elliot Fu</div>
					<div className='meta'>Friends of Veronika</div>
					<div className='description'>
						Elliot requested permission to view your contact details
					</div>
				</div>
				<div className='extra content'>
					<div className='ui two buttons'>
						<div className='ui basic green button'>Approve</div>
						<div className='ui basic red button'>Decline</div>
					</div>
				</div>
			</div>
			<div className='item'>
				<div className='image'>
					<img alt="wtf" src={gifUrl} />
				</div>
				<div className='content'>
					<a href="www.wtf.io" className='header'>Watchmen</a>
					<div className='meta'>
						<span className='cinema'>IFC</span>
					</div>
					<div className='description'>
						<p></p>
					</div>
					<div className='extra'>
						<div className='ui right floated primary button'>
							Buy tickets
							<i className='right chevron icon'></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
