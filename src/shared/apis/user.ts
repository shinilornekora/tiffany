import { apiCall } from '@shared/utils/unsafeApiCall';
import { Credentials, JWTResponse, USER_API } from '@types';

export const UserAPI = {
	[USER_API.REGISTER]: ({ username, password }: Credentials) =>
		apiCall({
			method: 'POST',
			path: '/auth/register',
			body: { username, password },
		}),
	[USER_API.LOGIN]: ({ username, password }: Credentials) =>
		apiCall({
			method: 'POST',
			path: '/auth/login',
			body: { username, password },
		}),
	[USER_API.REFRESH_ACCESS_TOKEN]: ({ refreshToken }: Partial<JWTResponse>) =>
		apiCall({
			method: 'POST',
			path: '/auth/token',
			body: { refreshToken },
		}),
	[USER_API.REFRESH_REFRESH_TOKEN]: ({
		refreshToken,
	}: Partial<JWTResponse>) =>
		apiCall({
			method: 'POST',
			path: '/auth/refresh',
			body: { refreshToken },
		}),
};
