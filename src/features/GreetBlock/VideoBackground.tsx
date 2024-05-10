import React from 'react';

import { RString } from '@types';
import video from '@shared/static/title.mp4';

type Props = {
	classes: RString;
};

export const VideoBackground = ({ classes }: Props) => {
	return (
		<div>
			<div className={classes.bg__overlay}>
				<video className={classes.bg__player} autoPlay muted loop>
					<source src={video} type='video/mp4' />
				</video>
			</div>
		</div>
	);
};
