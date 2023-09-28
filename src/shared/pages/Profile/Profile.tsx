import React from 'react';
import { useStyles } from './styles';
import Header from '../../components/header';
import cardIcon from '../../static/profile/card.png'
import noAvatar from '../../static/profile/no-avatar.png'
const Profile = () => {

    const { classes } = useStyles();

    return (
        <>
            <Header/>
            <div className={classes.profileContent}>
                <div className={classes.profileContentWrapper}>
                    <img src={noAvatar} alt="check" className="avatar"/>
                    <div className={classes.profileContentInfo}>
                        <div className={classes.profileContentInfoBlock}>
                            <div className={classes.profileContentInfoBlockName}>
                                Анатолий
                            </div>
                            <div className={classes.profileContentInfoBlockEmail}>
                                example@mail.ru
                            </div>
                            <div className={classes.profileContentInfoBlockCreditCard}>
                                <img src={cardIcon} alt="check"/>
                                <p>****5538</p>
                            </div>
                        </div>
                        <div className={classes.profileContentInfoBlock}>
                            <div onClick={() => {}}>View purchased products</div>
                            <div onClick={() => {}}>Change account info</div>
                            <div onClick={() => {}}>Log out</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
