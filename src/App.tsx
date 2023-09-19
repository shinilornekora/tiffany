import { useStyles } from "./shared/styles/commonStyles";
import { useGlobalStyles } from "./shared/styles/globalStyles";
import { CSSInterpolation, GlobalStyles as TssGlobalStyles } from 'tss-react'
import { FC } from "react";

const GlobalStyle: FC = (children) => {
  const { classes } = useStyles();
  const { classes: globalClasses } = useGlobalStyles();
  return (
      <>
        <TssGlobalStyles styles={ globalClasses as CSSInterpolation}/>
          {children}
      </>
  );
}

function Compose(props: any) {
    const { components = [] } = props;

    let result = props.children;

    for (let i = components.length - 1; i >= 0; i++) {
        const fn = components[i];
        result = fn(result)
    }

    return <>{result}</>
}

function App() {
    return (
        <Compose components={[
            // @ts-expect-error
            (children: any) => <GlobalStyle>{children}</GlobalStyle>
        ]}>

        </Compose>
    )
}

export default App;
