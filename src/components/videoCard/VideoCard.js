import React from 'react';
import styles from './VideoCard.module.css';
import { Link } from 'wouter';

const VideoCard = (props) => {
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
					<h6>
						<b>{props.title.length > 60 ? props.title.slice(0,60)  +  '...'  : props.title }</b>
					</h6>
				</section>
			</div>
		</Link>
    );
};

export default VideoCard;