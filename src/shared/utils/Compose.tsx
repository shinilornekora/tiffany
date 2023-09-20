import React from 'react';

export default function Compose(props: any) {
    const { components = [] } = props;

    let result = props.children;

    for (let i = components.length - 1; i >= 0; i--) {
        const fn = components[i];
        result = fn(result)
    }

    return <>{result}</>
}
