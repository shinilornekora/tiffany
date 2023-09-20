import {createBrowserRouter} from 'react-router-dom';
import {Root} from './shared/components/Root';
import {RouterErrorElement} from './shared/components/RouterErrorElement';
import React from 'react';


//TODO: Надо сделать шаблоны всех страничек, чтобы проверить роутинг.
//TODO: P.S. Редактируем страницы в папке pages.
export const router = createBrowserRouter([{
    path: '/',
    element: <Root/>,
    errorElement: <RouterErrorElement/>,
    children: [
        {
            path: '/',
            element: <Root/>
        }
    ].flat()
}])
