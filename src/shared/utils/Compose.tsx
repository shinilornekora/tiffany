import React, {ReactNode} from 'react';

interface Props {
	children: ReactNode;
	components: Array<(element: ReactNode) => ReactNode>;
}

export default function Compose({ children, components }: Props) {

	for (let i = components.length - 1; i >= 0; i--) {
		const fn = components[i];
		children = fn(children);
	}

	return <>{children}</>;
}
