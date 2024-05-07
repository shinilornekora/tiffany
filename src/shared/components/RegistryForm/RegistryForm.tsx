import { FormEvent, Ref } from "react";
import { FormLogin } from "../contentBlock";
import useTranslation from "../../../translations/useTranslation";
import { useGlobalStyles } from "../../styles/globalStyles";

type Props = {
    classes: Record<string, string>;
    commonClasses: Record<string, string>;
    inputRef: Ref<HTMLInputElement>;
    inputFocus: string;
    handleRegistry: (event: FormEvent<HTMLFormElement>) => void;
    setInputFocus: (e: FormLogin) => void;
    handleShowLoginForm: () => void;
}

export const RegistryForm: React.FC<Props> = ({ 
    classes, 
    commonClasses, 
    inputRef, 
    handleRegistry, 
    inputFocus, 
    setInputFocus,
    handleShowLoginForm 
}) => {
    const t = useTranslation();
    const { classes: globalClasses, cx } = useGlobalStyles();

    return (
        <div
			className={commonClasses.greatings__formWrapper}
			ref={inputRef}
		>
			<form
		    	action='#'
				method='post'
				className={classes.startInputWrapper}
				onSubmit={handleRegistry}
			>
				<div className={commonClasses.input__wrapper}>
					<input
						className={`${commonClasses.input__default} ${inputFocus === 'name' ? commonClasses.activeInput : ''}`}
			        	type='text'
						name='personName'
						autoComplete='off'
						placeholder='name'
						onFocus={() => setInputFocus('name')}
						onBlur={() => {}}
				    />
				</div>
				<div className={commonClasses.input__wrapper}>
					<input
						className={`${commonClasses.input__default} ${inputFocus === 'username' ? commonClasses.activeInput : ''}`}
						type='text'
						name='username'
						autoComplete='off'
						placeholder='login'
						onFocus={() => setInputFocus('username')}
				    	onBlur={() => {}}
					/>
				</div>
				<div className={commonClasses.input__wrapper}>
					<input
						className={cx(
                                commonClasses.input__default,
                                inputFocus === 'password' ? commonClasses.activeInput : '',
							)
                        }
						type='password'
						name='userpass'
						autoComplete='off'
						placeholder='password'
						onFocus={() => setInputFocus('password')}
					/>
				</div>
				<div>
					<button
						className={globalClasses.button}
						type='submit'
					>
						{t('Register')}
					</button>
				</div>
			</form>
			<div className={commonClasses.greatings__changeForm}>
				{t('Уже есть аккаунт? ')}
				<span onClick={handleShowLoginForm}>
					{t('Войти!')}
				</span>
			</div>
		</div>
	)
}