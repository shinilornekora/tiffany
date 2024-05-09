import { apiCall } from '@shared/utils/unsafeApiCall';
import { BRANCHES_API } from '@types';

export const BranchAPI = {
	[BRANCHES_API.LIST]: () =>
		apiCall({
			method: 'GET',
			path: '/branches',
		}),
	[BRANCHES_API.GET]: (id: string) =>
		apiCall({
			method: 'GET',
			path: '/branches',
			body: { id },
		}),
};
