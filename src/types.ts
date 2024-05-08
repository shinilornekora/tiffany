export type RString = Record<string, string>;

export interface User {
	email: string;
	password: string;
	credentials: RString;
	licenses_key?: Array<string>;
	avatar?: string;
	isAdmin?: boolean;
	status: number;
	creditCard: RString;
}

export interface Product {
	name: string;
	releaseDate: Date;
	version: string;
	price: number;
	pack: string;
	picture: string;
	studentDiscounts?: boolean;
	specialDiscounts?: boolean;
	key: string;
}

export interface Payments {
	id: string;
	recipient: User;
	sender: User;
	amount: number;
}

export interface Message {
	id: number;
	text: string;
	sender: User;
	recipient: string;
	content: string[];
	reputation: number;
	forum: string;
}

export interface Forum {
	topic: string;
	theme: string;
	tags: string[];
}

export type ApiResponse = RString;