import { apiCall } from '@shared/utils/unsafeApiCall';
import { FORUM_API } from '@types';

export const ForumAPI = {
	[FORUM_API.LIST]: () =>
		apiCall({
			method: 'GET',
			path: '/forum',
		}),
	[FORUM_API.MESSAGES]: () =>
		apiCall({
			method: 'GET',
			path: '/forum/messages',
		}),
};
