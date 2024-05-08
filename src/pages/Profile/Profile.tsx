import React from 'react';
import { useStyles } from './styles';
import { Header } from '../../features/Header/header';

import { useTranslation } from '../../shared/hooks/useTranslation';

import cardIcon from '../../shared/static/profile/card.png';
import noAvatar from '../../shared/static/profile/no-avatar.png';

export const Profile = () => {
	const t = useTranslation();

	const { classes } = useStyles();

	// Какая то логика получения данных
	const name = 'Anatoliy';
	const email = 'example@mail.ru';
	const cardNumber = '****5538';

	return (
		<>
			<Header />
			<div className={classes.profileContent}>
				<div className={classes.profileContentWrapper}>
					<img src={noAvatar} alt='check' className='avatar' />
					<div className={classes.profileContentInfo}>
						<div className={classes.profileContentInfoBlock}>
							<div
								className={classes.profileContentInfoBlockName}
							>
								{name}
							</div>
							<div
								className={classes.profileContentInfoBlockEmail}
							>
								{email}
							</div>
							<div
								className={
									classes.profileContentInfoBlockCreditCard
								}
							>
								<img src={cardIcon} alt='check' />
								<p>{cardNumber}</p>
							</div>
						</div>
						<div className={classes.profileContentInfoBlock}>
							<div onClick={() => {}}>
								{t('View purchased products')}
							</div>
							<div onClick={() => {}}>
								{t('Change account info')}
							</div>
							<div onClick={() => {}}>{t('Log out')}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
