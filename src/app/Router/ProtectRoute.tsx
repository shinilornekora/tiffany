import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../../shared/hooks/useAuth';

export type PRProps = {
	children: JSX.Element;
};

export const ProtectedRoute = ({ children }: PRProps) => {
	const { user } = useAuth();

	if (!user) {
		return <Navigate to='/' />;
	}

	return children;
};
