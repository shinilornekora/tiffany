import React, { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from './useLocalStorage';

import { PRProps } from '../../app/Router/ProtectRoute';

type AuthProps = {
	user: string;
	login: (data: Record<string, string>) => Promise<void>;
	logout: () => void;
};

const AuthContext = createContext<AuthProps>({
	user: '',
	login: async data =>
		(_data => {
			_data;
		})(data),
	logout: () => {},
});

export const AuthProvider = ({ children }: PRProps) => {
	const [user, setUser] = useLocalStorage('user', null);
	const navigate = useNavigate();

	const login = async (data: Record<string, string>) => {
		setUser(data);
		navigate('/profile');
	};

	const logout = () => {
		setUser(null);
		navigate('/', { replace: true });
	};

	const value = useMemo(
		() => ({
			user,
			login,
			logout,
		}),
		[user],
	);

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
