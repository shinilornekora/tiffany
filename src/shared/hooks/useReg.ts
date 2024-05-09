import { UserAPI } from '@shared/apis';
import { FormEvent, useCallback } from 'react';

export const useReg = useCallback((event: FormEvent<HTMLFormElement>) => {
	event.preventDefault();

	UserAPI.register({
		username: 'Admin',
		password: '123123',
	});

	Tiffany.log('Registry was done successfully.');
}, []);
