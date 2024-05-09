import { UserAPI } from '@shared/apis';
import { FormEvent, useCallback } from 'react';

export const useLog = useCallback((event: FormEvent<HTMLFormElement>) => {
	event.preventDefault();

	UserAPI.login({
		username: 'Admin',
		password: '123123',
	});

	Tiffany.log('Login was done successfully.');
}, []);
