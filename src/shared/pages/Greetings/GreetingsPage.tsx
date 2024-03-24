import React from 'react';
import Header from '../../components/header';
import ContentBlock from '../../components/contentBlock';

<<<<<<< HEAD
const GreetingsPage = () => {
	return (
		<div>
			<Header/>
			<ContentBlock/>
=======
export const GreetingsPage = () => {
	const { classes } = useStyles();

	return (
		<div className={classes.content}>
			<Header />
			<ContentBlock />
>>>>>>> 3ff8973b945342e55b1f551c839756eb8f358071
		</div>
	);
};
