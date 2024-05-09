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

export type SafeApiCallProps = {
	entity: API_ENTITIES;
	endpoint: API_TYPES[API_ENTITIES];
	args: unknown;
};

export type Credentials = {
	username: string;
	password: string;
};

export type JWTResponse = {
	type: string;
	accessToken: string;
	refreshToken: string;
};

export enum API_ENTITIES {
	USER = 'user',
	BRANCHES = 'branches',
	PRODUCT = 'product',
	FORUM = 'forum',
}

export enum USER_API {
	REGISTER = 'register',
	LOGIN = 'login',
	REFRESH_ACCESS_TOKEN = 'refreshAccessToken',
	REFRESH_REFRESH_TOKEN = 'refreshRefreshToken',
}

export enum BRANCHES_API {
	LIST = 'list',
	GET = 'get',
}

export enum FORUM_API {
	LIST = 'list',
	MESSAGES = 'messages',
}

export enum PRODUCT_API {
	GET = 'get',
	OWNED = 'owned',
	LICENCE_KEYS = 'licenceKeys',
}

export type API_TYPES = {
	user: USER_API;
	branches: BRANCHES_API;
	forum: FORUM_API;
	product: PRODUCT_API;
};

export type ApiResponse = RString;

export type UNSAFE_CALL = {
	method: 'GET' | 'POST';
	path: string;
	body?: any;
};

export type FormLogin = 'username' | 'password' | 'name' | '';
