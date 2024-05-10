import { FormEvent, useCallback } from 'react';
import { UserAPI } from '@shared/apis';

export const useLog = () => {
	return useCallback((event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		UserAPI.login({
			username: 'Admin',
			password: '123123',
		});

		Tiffany.log('Login was done successfully.');
	}, []);
};
