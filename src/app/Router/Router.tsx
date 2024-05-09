import React from 'react';

import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { RouterErrorElement } from './ErrorFallback/RouterErrorElement';

import { ProtectedRoute } from './ProtectRoute';
import { GreetingsPage } from '@pages/Greetings';
import { Branches } from '@pages/Branches';
import { Profile } from '@pages/Profile';
import { Cart } from '@pages/Cart';
import { Card } from '@pages/Card';

import { Root } from '../../Root';

const protectedRoutes: RouteObject[] = [
	{
		path: '/cart',
		element: <Cart />,
	},
	{
		path: '/product_card/:product_id',
		element: <Card />,
	},
	{
		path: '/profile',
		element: <Profile />,
	},
	{
		path: '/branches',
		element: <Branches />,
	},
].map(route => ({
	path: route.path,
	element: <ProtectedRoute>{route.element}</ProtectedRoute>,
}));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <RouterErrorElement />,
		children: [
			{
				path: '/',
				element: <GreetingsPage />,
			},
			...protectedRoutes,
		].flat(),
	},
]);
