import React, { 
    useCallback, 
    useState,
    Ref
} from 'react';

import { useTranslation } from '@shared/hooks/useTranslation';
import { useStyles } from './styles';
import { FormLogin } from '@types';
import { TitleInput } from './TitleInput';
import { useLog } from '@shared/hooks/useLog';
import { useReg } from '@shared/hooks/useReg';

type Props = {
	inputRef: Ref<HTMLInputElement>;
	inputFocus: string;
	setInputFocus: (e: FormLogin) => void;
};

export const AuthForm: React.FC<Props> = ({
	inputFocus,
	inputRef,
	setInputFocus,
}) => {
	const t = useTranslation();
	const { classes } = useStyles();

    const [isLogMode, toggleMode] = useState<boolean>(true);

    const focusName = useCallback(() => setInputFocus('name'), [setInputFocus]);
	const focusUsername = useCallback(
		() => setInputFocus('username'),
		[setInputFocus],
	);
	const focusPass = useCallback(
		() => setInputFocus('password'),
		[setInputFocus],
	);

	return (
		<div className={classes.greatings__formWrapper} ref={inputRef}>
			<form
				action='#'
				method='post'
				className={classes.startInputWrapper}
				onSubmit={isLogMode ? useLog : useReg}
			>
                { !isLogMode && <TitleInput focus={inputFocus} cb={focusName} name="name"/>}
                <TitleInput focus={inputFocus} cb={focusUsername} name="username"/>
                <TitleInput focus={inputFocus} cb={focusPass} name="password"/>
				<div>
					<button className={classes.button} type='submit'>
						{isLogMode ? t('Log in') : t('Register')}
					</button>
				</div>
			</form>
			<div className={classes.greatings__changeForm}>
				{isLogMode ? t('No account?') : t('Already have an account?')}
				<span onClick={() => toggleMode(!isLogMode)}>
					{isLogMode ? t('Sign up!') : t('Sign in!')}
				</span>
			</div>
		</div>
	);
};
