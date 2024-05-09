import { apiCall } from '@shared/utils/unsafeApiCall';
import { PRODUCT_API } from '@types';

export const ProductAPI = {
	[PRODUCT_API.GET]: (id: string) =>
		apiCall({
			method: 'GET',
			path: '/products',
			body: { id },
		}),
	[PRODUCT_API.OWNED]: (uid: string) =>
		apiCall({
			method: 'GET',
			path: '/products/owned',
			body: { uid },
		}),
	[PRODUCT_API.LICENCE_KEYS]: () =>
		apiCall({
			method: 'GET',
			path: '/products/licenses',
		}),
};
