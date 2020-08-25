import React from 'react';
import faker from 'faker';

const ImageList = ({ tech }) => {
	return (
		<ul>
			{tech.map(t => (
				<img key={t.name + t.imgSrc} src={t.imgSrc} alt={t.name} />
			))}
		</ul>
	);
};

const InfoList = ({ dataArr }) => {
	return (
		<ul>
			{dataArr.map(x => (
				<div key={x.desc + x.subTitle}>
					<p>
						<span className='title'>{x.title}</span>
						{' - '}
						<span className='sub-title'>{x.subTitle}</span>
					</p>
					<p className='desc'>{x.desc}</p>
				</div>
			))}
		</ul>
	);
};

const SimpleList = ({ dataArr }) => {
	return (
		<ul>
			{dataArr.map(d => (
				<p key={d.data + Math.random()}>{d.data}</p>
			))}
		</ul>
	);
};

const AboutContainer = () => {
	const title = faker.lorem.words(3);
	const description = faker.lorem.words(30);
	const tech = [{}, {}, {}];
	tech.forEach(i => {
		i.name = faker.lorem.word();
		i.imgSrc = faker.image.avatar();
	});
	const telnum = faker.phone.phoneNumber();
	const xp = [{}, {}, {}];
	xp.forEach(x => {
		x.title = faker.lorem.word();
		x.subTitle = faker.lorem.words(5);
		x.desc = faker.lorem.words(20);
	});
	const edu = [{}, {}, {}];
	edu.forEach(ed => {
		ed.title = faker.lorem.words(2);
		ed.subTitle = faker.lorem.words(3);
		ed.desc = faker.lorem.words(10);
	});
	const skills = [{}, {}, {}];
	skills.forEach(sk => {
		sk.data = faker.lorem.words(20);
	});
	const bonusXp = [{}, {}, {}];
	bonusXp.forEach(x => {
		x.title = faker.lorem.word();
		x.subTitle = faker.lorem.words(5);
		x.desc = faker.lorem.words(20);
	});
	const hobbies = [{}, {}];
	hobbies.forEach(hb => {
		hb.data = faker.lorem.words(15);
	});

	return (
		<div>
			<section className='intro'>
				<h2>{title}</h2>
				<p>{description}</p>
			</section>
			<section className='stack'>
				<h3>Technology Stack</h3>
				<ImageList tech={tech} />
			</section>
			<section className='experience'>
				<h3>Experience</h3>
				<InfoList dataArr={xp} />
			</section>
			<section className='education'>
				<h3>Education</h3>
				<InfoList dataArr={edu} />
			</section>
			<section className='skills'>
				<h3>Other work-relevant skills</h3>
				<SimpleList dataArr={skills} />
			</section>
			<section className='education'>
				<h3>Other work experience</h3>
				<InfoList dataArr={bonusXp} />
			</section>
            <section className='hobbies'>
				<h3>Hobbies'n'interests</h3>
				<SimpleList dataArr={hobbies} />
			</section>
			<section>
				<h4>Contact</h4>
				<p>{telnum}</p>
			</section>
		</div>
	);
};

export default AboutContainer;
