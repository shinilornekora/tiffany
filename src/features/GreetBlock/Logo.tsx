import React, { Ref } from 'react';

import { useTranslation } from '@shared/hooks/useTranslation';
import { RString } from '@types';

type Props = {
	_ref: Ref<HTMLDivElement>;
	cb: () => void;
	commonClasses: RString;
};

export const Logo = ({ _ref, cb, commonClasses }: Props) => {
	const t = useTranslation();

	return (
		<div
			ref={_ref}
			onClick={cb}
			className={commonClasses.content__textblock}
		>
			<p className={commonClasses.greetings__slider}>
				{t('Welcome to TeamEntropy')}
			</p>
			<p className={commonClasses.greetings__description}>
				{t('An endless world of possibilities in soundscape design')}
			</p>
		</div>
	);
};
