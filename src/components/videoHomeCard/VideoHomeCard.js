import React from 'react';
import styles from './VideoHomeCard.module.css';
import { Link } from 'wouter';

const VideoHomeCard = (props) => {
	return (
		<Link to={`/video/${props.id}`}>
			<div className={styles.cardContainer}>
				<div className={styles.cardHeader}>
					<img className={styles.cardImage} src={props.thumbnail} alt=".." />
					<div className={styles.playIcon}>
						<i className="fa fa-play fa-5x" />
					</div>
				</div>
				<section className={styles.cardBody}>
					<h5>
						<b>{props.title}</b>
					</h5>
					<p> {props.description} </p>
				</section>
			</div>
		</Link>
	);
};

export default VideoHomeCard;
