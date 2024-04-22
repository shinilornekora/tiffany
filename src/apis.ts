import axios, { AxiosResponse } from 'axios';
import type { ApiResponse } from './types';
import { useNavigate } from 'react-router-dom';

const server = 'http://94.250.251.77/api';
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
			axios.get<ApiResponse>(`${server}/users/is_active?uid=${uid}`),
		authorize: (login: string, password: string) =>
			axios.post<ApiResponse>(`${server}/users/auth`, {
				login: login,
				password: password,
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

type UserData = {
	personName?: string;
	username: string;
	password: string;
};


export const registerUser = (userData: UserData) => {

	const config = {
		mode: 'cors',
		headers : {
			'Access-Control-Allow-Origin': '*'
		}
	};

	return axios.post(`${server}/auth/register`, userData, config)
		.then((response) => {
			if (response.status === 200) {
				alert('Вы успешно зарегистрировались, вот ваши данные для входа');

				return response; // Возвращаем объект ответа в случае успешной регистрации
			} else {
				throw new Error('Registration failed');
			}
		})
		.catch((error) => {
			// Обработка ошибок
			// eslint-disable-next-line no-console
			console.error('Ошибка при регистрации:', error);
			throw error; // Передаем ошибку дальше для обработки в вызывающем коде
		});
};

export const useLoginUser = async (userData: UserData) => {
	const navigate = useNavigate(); // Используем хук useNavigation для получения объекта навигации

	const response: AxiosResponse = await axios.post(`${server}/auth/login`, userData);
	if (response.status === 200) {
		navigate('/profile'); // Перенаправление на страницу профиля

		return response; // Возвращаем объект ответа в случае успешной авторизации
	} else {
		throw new Error('Login failed'); // Генерируем ошибку в случае неудачной авторизации
	}
};

export const checkTokenValidity = () => {
	// Запуск процесса пинга бэкенда каждые 60 секунд для обновления токена
	setInterval(async () => {
		const token = localStorage.getItem('token');
		const response = await axios.post(`${server}/auth/token`, { token });
		if (response.status !== 200) {
			// Токен недействителен, произвести logout и удалить токен из локального хранилища
			localStorage.removeItem('token');
		}
	}, 60000);
};


