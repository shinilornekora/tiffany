/// <reference types="react-scripts" />

declare const Tiffany: {
	info: () => never;
	_loginDevFunc: () => void;
	_logoutDevFunc: () => void;
	logout: () => void;
	language: 'en' | 'ru';
	ErrorLog: (text: string) => void;
	log: (text: any) => void;
	globalDevCall: (fn: any, params?: Record<string, string>) => () => void;
};
