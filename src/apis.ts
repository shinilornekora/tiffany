import axios from 'axios';

//TODO: Надо написать хендлер ошибок апи, иначе мы постоянно будем рушить сервак при плохом урле.

const apis = {
	user: {
		list: () => axios.get<Record<string, string>>('http://localhost:8080/api/users'),
		active: () => axios.get<Record<string, string>>('http://localhost:8080/api/users/active'),
		inactive: () => axios.get<Record<string, string>>('http://localhost:8080/api/users/inactive'),
		authorize: (login: string, password: string) =>
			axios.post<Record<string, boolean>>(
				'http://localhost:8080/api/users/auth',
				{login: login, password: password}
			)
	},
	product: {
		list: () => axios.get<Record<string, string>>('http//localhost:8080/api/products'),
		licenseKeys: () => axios.get('http://localhost:8080/api/products/licenses'),
	},
	payments: {
		list: () => axios.get('http://localhost:8080/api/payments/list'),
	},
	forum: {
		messages: () => axios.get('http://localhost:8080/api/forum/messages'),
	},
	utils: {
		translation: (text: string) => axios.post<{ code: 'OK', text: string }>('http://localhost:8080/api/utils/translate', { text: text }),
	}
};

export default apis;
