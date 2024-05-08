import React from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { RouterErrorElement } from './ErrorFallback/RouterErrorElement';

import { Root } from '../../Root';
import { Cart } from '../../pages/Cart';
import { Branches } from '../../pages/Branches';
import { GreetingsPage } from '../../pages/Greetings';
import { Profile } from '../../pages/Profile';
import { Card } from '../../pages/Card';
import { ProtectedRoute } from './ProtectRoute';

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
