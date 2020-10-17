/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styles from './Player.module.css';

const Player = (props) => {
	return (
		<React.Fragment>
			<div className={styles.player}>
				<iframe
					className={styles.responsiveIframe}
					src={props.url}
					frameBorder="0"
					allow="autoplay; fullscreen"
					allowFullScreen
				/>
			</div>
			<section className={styles.title}>
				<h5> {props.title} </h5>
			</section>
			<section className={styles.descBox}>
				<p> {props.description} </p>
			</section>
		</React.Fragment>
	);
};

export default Player;
