// import React from 'react';
import { atom } from 'recoil';

export const linkData = atom({
	key: 'linkData',
	default: null,
});
export const projectDataState = atom({
	key: 'projectData',
	default: null,
});
export const apiErr = atom({
	key: 'apiErr',
	default: null,
});
export const aboutData = atom({
	key: 'aboutData',
	default: null,
});
export const quoteAtom = atom({
	key: 'quoteAtom',
	default: null,
});
export const isModalShownAtom = atom({
	key: 'isModalShown',
	default: true,
});
export const sectionMainElemAtom = atom({
	key: 'sectionMainElem',
	default: null,
});

