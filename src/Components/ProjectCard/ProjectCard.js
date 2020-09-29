import React, { useRef } from 'react';
import faker from 'faker';
import Slider from "react-slick"
import linkIcon from './link-icon.svg';

const CustomArrow = (props) => {
	const { className, onClick } = props;
	return (
		<div className={`${className} carousel-arrows`} onClick={onClick}>
			{'>'}
		</div>
	);
}

const Preview = ({ websiteUrl, githubRepo, linkIcon }) => {
	const projectLinkRef = useRef(null);

	const carouselSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		fade: false,		
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false, // TODO -> add or remove arrows based on browser window width
		nextArrow: <CustomArrow />,
      	prevArrow: <CustomArrow />
	}

	return (
		<>
			<Slider {...carouselSettings} className='card-carousel'>
				{/* map a list of images */}
				<div>
					<div style={{width: 600, height: 400, background: '#AAA'}}></div>
				</div>
				<div>
					<div style={{width: 600, height: 400, backgroundImage: 'url("https://source.unsplash.com/random")', backgroundSize: 'cover'}} />
				</div>
			</Slider>
			<div className='project-card-links'>
				<a
					className='card-link'
					href={githubRepo}
					target='_blank'
					rel='noopener noreferrer'>
					<img className='link-icon' alt='link icon' src={linkIcon} />
					<h6 className='link-text'>GITHUB</h6>
				</a>
				<a
					ref={projectLinkRef}
					className='card-link'
					href={websiteUrl}
					target='_blank'
					rel='noopener noreferrer'>
					<img className='link-icon' alt='link icon' src={linkIcon} />
					<h6 className='link-text'>WEBSITE</h6>
				</a>
			</div>
		</>
	);
};

const ProjectCard = ({ id, cardData }) => {
	const { name, description, preview, technologies, githubRepo, websiteUrl } = { ...cardData };

	return (
		<div id={id} className='project-card'>
			<h3>{name}</h3>			
			<Preview
				websiteUrl={websiteUrl}
				githubRepo={githubRepo}
				linkIcon={linkIcon}
				preview={preview}
			/>
			<p>{description}</p>
			<div className='tech-stack'>
				<h5>Tech Stack:</h5>
				{technologies.map((item, index) => (
					<img
						key={index}
						alt='link icon'
						src={`${process.env.PUBLIC_URL}/assets/static/${item}.svg`}
					/>
				))}
			</div>
		</div>
	);
};

ProjectCard.defaultProps = {
	cardData: {
		name: faker.lorem.word(),
		description: faker.lorem.words(300),
		preview: { fields: { file: { url: faker.image.animals() } } },
		technologies: faker.lorem.words(Math.ceil(Math.random() * 10)).split(' '),
		githubRepo: 'http://www.github.com/aharapu',
		websiteUrl: 'http://www.github.com/aharapu',
	},
};

export default ProjectCard;
