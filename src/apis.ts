import axios from 'axios';
import type { ApiResponse } from './types';

const server = 'http://94.250.251.77/api';
const headers = {
	'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
	Origin: 'http://localhost:3000',
	'Access-Control-Allow-Headers':
		'Origin, X-Requested-With, Content-Type, Accept',
};
//TODO: Надо написать хендлер ошибок апи, иначе мы постоянно будем рушить сервак при плохом урле.

export type Credentials = {
	mail: string;
	password: string;
};

export type JWTResponse = {
	type: string;
	accessToken: string;
	refreshToken: string;
};

/**
 * @branches = ветки с продуктами
 * - list: получить все ветки
 * - get: получить ветку по id
 *
 * @user = пользователь
 * - check: проверить активен ли пользователь
 * - authorize: попытаться авторизировать пользователя
 *
 * @product = продукт
 * - get: получить описание продукта по id
 * - owned: получить список купленных товара
 *
 * @forum = форумные ручки
 */
export const apis = {
	user: {
		register: ({ mail, password }: Credentials) =>
			axios.post<JWTResponse>(
				`${server}/auth/register`,
				{
					mail,
					password,
				},
				{ headers, withCredentials: false },
			),
		login: ({ mail, password }: Credentials) =>
			axios.post<JWTResponse>(`${server}/auth/login`, {
				mail,
				password,
			}),
		refreshAccessToken: ({ refreshToken }: Partial<JWTResponse>) =>
			axios.post<JWTResponse>(`${server}/auth/token`, {
				refreshToken,
			}),
		refreshRefreshToken: ({ refreshToken }: Partial<JWTResponse>) =>
			axios.post<JWTResponse>(`${server}/auth/refresh`, {
				refreshToken,
			}),
	},
	branches: {
		list: () => axios.get<ApiResponse>(`${server}/branches/`),
		get: (id: string) =>
			axios.get<ApiResponse>(`${server}/branches?id=${id}`),
	},
	product: {
		get: (id: string) =>
			axios.get<ApiResponse>(`${server}/products?id=${id}`),
		owned: (uid: string) =>
			axios.get<ApiResponse>(`${server}/products/owned?uid=${uid}`),
		// licenseKeys: () => axios.get('http://localhost:8080/api/products/licenses`),
	},
	forum: {
		list: () => axios.get<ApiResponse>(`${server}/forum`),
		messages: () => axios.get<ApiResponse>(`${server}/forum/messages`),
	},
};
