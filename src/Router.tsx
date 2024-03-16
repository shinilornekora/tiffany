import { createBrowserRouter } from 'react-router-dom';
import { Root } from './shared/components/Root';
import { RouterErrorElement } from './shared/components/ErrorBoundary/RouterErrorElement';
import React from 'react';
import Cart from './shared/pages/Cart';
import GreetingsPage from './shared/pages/Greetings';
import Profile from './shared/pages/Profile';
import Card from './shared/pages/Card';
import { Branches } from './shared/pages/Branches';

export const router = createBrowserRouter([{
	path: '/',
	element: <Root/>,
	errorElement: <RouterErrorElement/>,
	children: [
		{
			path: '/',
			element: <GreetingsPage/>
		},
		{
			path: '/cart',
			element: <Cart/>
		},
		{
			path: '/product_card/:product_id',
			element: <Card/>
		},
		{
			path: '/profile',
			element: <Profile/>
		},
		{
			path: '/branches',
			element: <Branches/>
		},
	].flat()
}]);


