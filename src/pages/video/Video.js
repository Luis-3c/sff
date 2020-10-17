import React, { useEffect, useState } from 'react';
import styles from './Video.module.css';
import Player from '../../components/player/Player';
import { getVideo } from '../../services/sffService';
import Recommendations from '../../components/recommendations/Recommendations';

let playerSrc = 'https://player.vimeo.com/video/';

const Video = (props) => {
	const [ video, setVideo ] = useState([]);
	const [ url, setUrl ] = useState();

	useEffect(
		() => {
			getVideo(props.params.id).then((response) => response.json()).then((res) => {
				console.log(res.videos);
				setVideo(res.videos);
				setUrl(`${playerSrc}${res.videos[0].idvideo}?autoplay=1`);
			});
		},
		[ props.params.id ]
	);

	return (
		<div className="container-fluid">
			<div className={styles.mainCont}>
				<section className={styles.playerCont}>
					{video.map(video=>{
						return <Player {...video} url={url} key={video.id} />
					})}
				</section>
				<section className={styles.recoCont}>
					<Recommendations />
				</section>
			</div>
		</div>
	);
};

export default Video;
