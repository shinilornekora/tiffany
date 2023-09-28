import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Root } from './shared/components/Root';
import { RouterErrorElement } from './shared/components/RouterErrorElement';
import React from 'react';
import Cart from './shared/pages/Cart';
import GreetingsPage from './shared/pages/GreetingsPage';
import Products from './shared/pages/Products';
import Profile from './shared/pages/Profile';
import Card from './shared/pages/Card';

export const router = createBrowserRouter([{
    path: '/',
    element: <Root/>,
    errorElement: <RouterErrorElement/>,
    children: [
        {
            path: '/hello',
            element: <GreetingsPage/>
        },
        {
            path: '/cart',
            element: <Cart/>
        },
        {
            path: '/products',
            element: <Products/>
        },
        {
            path: '/product_card/:product_id',
            element: <Card/>
        },
        {
            path: '/profile',
            element: <Profile/>
        },
    ].flat()
}])


