import React, { useEffect, useState } from 'react';
import styles from './VideosHome.module.css';
import Searcher from '../../components/searcher/Searcher';
import VideoHomeCard from '../../components/videoHomeCard/VideoHomeCard';
import { getVideosHome } from '../../services/sffService';
import Loader from '../../components/loader/Loader';

const VideosHome = () => {
	const [ videos, setVideos ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		setLoading(true);
		getVideosHome().then((response) => response.json()).then((res) => {
			console.log('RESPUESTA: ', res);
			setVideos(res.videos);
			setLoading(false);
		});
	}, []);

	return (
		<div className="container-fluid">
			<Searcher />
			<section className={styles.videosCont}>
				{loading ? <Loader></Loader> : videos.map((video) => {
					return <VideoHomeCard {...video} key={video.id} />;
				})};
			</section>
		</div>
	);
};

export default VideosHome;
