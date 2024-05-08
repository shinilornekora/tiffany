import React from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { RouterErrorElement } from './ErrorFallback/RouterErrorElement';

import { Root } from '../../Root';
import { Cart } from '../../widgets/Cart';
import { Branches } from '../../widgets/Branches';
import { GreetingsPage } from '../../widgets/Greetings';
import { Profile } from '../../widgets/Profile';
import { Card } from '../../widgets/Card';
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
