import Compose from './shared/utils/Compose'
import React from "react";
import { RouterProvider } from 'react-router';
import { GlobalStyle } from './shared/utils/globalStyle';
import { router } from './Router';
import { useGlobalStyles } from './shared/styles/globalStyles';

function App() {

    useGlobalStyles();

    return (
        <Compose components={[
            (children: any) => <GlobalStyle>{children}</GlobalStyle>,
        ]}>
            <RouterProvider router={router}/>
        </Compose>
    )
}

export default App;
