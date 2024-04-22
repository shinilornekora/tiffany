import axios, { AxiosResponse } from 'axios';
import type { ApiResponse } from './types';
import { useNavigation } from '@react-navigation/native';

// const host = '';
const server = 'http://94.250.251.77';
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

type UserData = {
	personName?: string;
	username: string;
	userpass: string;
};

export const registerUser = async (userData: UserData) => {
	const navigation = useNavigation(); // Используем хук useNavigation для получения объекта навигации

	try {
		const response: AxiosResponse = await axios.post(`${server}/api/auth/register`, userData);
		if (response.status === 200) {
			navigation.navigate('Login'); // Перенаправление на страницу авторизации с использованием объекта навигации

			return response; // Возвращаем объект ответа в случае успешной регистрации
		} else {
			throw new Error('Registration failed'); // Генерируем ошибку в случае неудачной регистрации
		}
	} catch (error) {
		throw new Error('Registration failed'); // Генерируем ошибку при возникновении ошибки во время запроса
	}
};

export const loginUser = async (userData: UserData) => {
	const navigation = useNavigation(); // Используем хук useNavigation для получения объекта навигации

	try {
		const response: AxiosResponse = await axios.post(`${server}/api/auth/login`, userData);
		if (response.status === 200) {
			navigation.navigate('/branches'); // Перенаправление на домашнюю страницу

			return response; // Возвращаем объект ответа в случае успешной авторизации
		} else {
			throw new Error('Login failed'); // Генерируем ошибку в случае неудачной авторизации
		}
	} catch (error) {
		throw new Error('Login failed'); // Генерируем ошибку при возникновении ошибки во время запроса
	}
};

export const checkTokenValidity = () => {
	// Запуск процесса пинга бэкенда каждые 60 секунд для обновления токена
	setInterval(async () => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.post('http://94.250.251.77/api/auth/token', { token });
			if (response.status === 200) {
				// Токен действителен
			} else {
				// Токен недействителен, произвести logout и удалить токен из локального хранилища
				localStorage.removeItem('token');
			}
		} catch (error) {
			// Обработка ошибок
		}
	}, 60000);
};


