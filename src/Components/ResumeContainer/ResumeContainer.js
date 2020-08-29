import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import resume from '../../content/resume';

const ImageList = ({ tech }) => {
	return (
		<>
			{tech.map(t => (
				<img key={t} src={`${process.env.PUBLIC_URL}/assets/static/${t}.svg`} alt={t} />
			))}
		</>
	);
};

const ExpList = ({ dataArr }) => {
	return (
		<>
			{dataArr.map(({ institution, activity, location, desc }) => (
				<div key={institution} className='exp-article'>
					<p className='exp-article-header'>
						<span className='institution'>{institution}</span>
						{' - '}
						<span className='activity'>{activity}</span>
					</p>
					<p className='location'>{location}</p>
					<p className='description'>{desc}</p>
				</div>
			))}
		</>
	);
};

const SimpleList = ({ dataArr }) => {
	return (
		<ul>
			{dataArr.map(d => (
				<li key={d + Math.random()}>{d}</li>
			))}
		</ul>
	);
};

const ResumeContainer = () => {
	const { phone, name, desc, techStack, exp, edu, skills, otherWork, hobbies } = resume;
	const eduData = edu.map(({ school, course, location, desc }) => ({
		institution: school,
		activity: course,
		location: location,
		desc: desc,
	}));

	const [expData, altExpData] = [exp, otherWork].map(arr =>
		arr.map(({ company, title, location, desc }) => ({
			institution: company,
			activity: title,
			location: location,
			desc: desc,
		})),
	);

	return (
		<div className='resume-container'>
			<section className='contact'>
				<p>Contact: {phone}</p>
			</section>
			<a className='download' href='/assets/cv-harapu.pdf' download='cv-harapu.pdf'>
				<FontAwesomeIcon icon={faFileDownload} size='lg' />
				<p>Download</p>
			</a>
			<section className='intro'>
				<h2>{name}</h2>
				<p>{desc}</p>
			</section>
			<section className='stack'>
				<h3>Technology Stack</h3>
				<ImageList tech={techStack} />
			</section>
			<section className='experience'>
				<h3>Experience</h3>
				<ExpList dataArr={expData} />
			</section>
			<section className='experience'>
				<h3>Education</h3>
				<ExpList dataArr={eduData} />
			</section>
			<section className='simple-list'>
				<h3>Other Skills</h3>
				<SimpleList dataArr={skills} />
			</section>
			<section className='experience'>
				<h3>Other Work Experience</h3>
				<ExpList dataArr={altExpData} />
			</section>
			<section className='simple-list'>
				<h3>Hobbies & Interests</h3>
				<SimpleList dataArr={hobbies} />
			</section>
			<section className='cta'>
				
			</section>
		</div>
	);
};

export default ResumeContainer;
