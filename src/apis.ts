import axios from 'axios';
import type { ApiResponse } from './types';

const host = '';
const server = 'http://localhost:8080';
//TODO: Надо написать хендлер ошибок апи, иначе мы постоянно будем рушить сервак при плохом урле.

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
		check: (uid: string) =>
			axios.get<ApiResponse>(`${server}/api/users/is_active?uid=${uid}`),
		authorize: (login: string, password: string) =>
			axios.post<ApiResponse>(`${server}/api/users/auth`, {
				login: login,
				password: password,
			}),
	},
	branches: {
		list: () => axios.get<ApiResponse>(`${server}/api/branches/`),
		get: (id: string) =>
			axios.get<ApiResponse>(`${server}/api/branches?id=${id}`),
	},
	product: {
		get: (id: string) =>
			axios.get<ApiResponse>(`${server}/api/products?id=${id}`),
		owned: (uid: string) =>
			axios.get<ApiResponse>(`${server}/api/products/owned?uid=${uid}`),
		// licenseKeys: () => axios.get('http://localhost:8080/api/products/licenses`),
	},
	forum: {
		list: () => axios.get<ApiResponse>(`${server}/api/forum`),
		messages: () => axios.get<ApiResponse>(`${server}/api/forum/messages`),
	},
};
