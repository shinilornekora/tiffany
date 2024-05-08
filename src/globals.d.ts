/// <reference types="react-scripts" />

declare module '*.png';
declare module '*.jpeg';
declare module '*.mp4';

declare const Tiffany: {
	info: () => never;
	_loginDevFunc: () => void;
	_logoutDevFunc: () => void;
	logout: () => void;
	language: 'en' | 'ru';
	ErrorLog: (text: string) => void;
	log: (text: string) => void;
	globalDevCall: (
		fn: (data: RString) => Promise<void> | void, 
		params?: RString) => () => void;
};
