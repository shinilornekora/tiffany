import { useGlobalStyles } from "./shared/styles/globalStyles";
import { CSSInterpolation, GlobalStyles as TssGlobalStyles } from 'tss-react'
import Compose from './shared/utils/Compose'
import React, { FC } from "react";
import Header from './shared/components/header';
import {RouterProvider} from 'react-router';
import {createBrowserRouter} from 'react-router-dom';
import ContentBlock from './shared/components/contentBlock';
import {useStyles} from './shared/styles/commonStyles';

const GlobalStyle: FC<{children: React.ReactNode}> = ({children}) => {
  const { classes: globalClasses } = useGlobalStyles();
  return (
      <>
        <TssGlobalStyles styles={ globalClasses as CSSInterpolation}/>
          {children}
      </>
  );
}

const Root = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.content}>
            <Header/>
            <ContentBlock/>
        </div>
    );
};

const RouterErrorElement = () => {
    return (
        <div>

        </div>
    );
};


const router = createBrowserRouter([{
    path: '/',
    element: <Root/>,
    errorElement: <RouterErrorElement/>,
    children: [

    ].flat()
}])

function App() {
    return (
        <Compose components={[
            (children: any) => <GlobalStyle>{children}</GlobalStyle>,
        ]}>
            <RouterProvider router={router}/>
        </Compose>
    )
}

export default App;
