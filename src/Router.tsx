import React from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { RouterErrorElement } from './shared/components/ErrorBoundary/RouterErrorElement';

import { Root } from './shared/components/Root';
import { Cart } from './shared/pages/Cart';
import { Branches } from './shared/pages/Branches';
import { GreetingsPage } from './shared/pages/Greetings';
import { Profile } from './shared/pages/Profile';
import { Card } from './shared/pages/Card';
import { ProtectedRoute } from './shared/components/protectRoute';

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
