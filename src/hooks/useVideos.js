import { useEffect, useState } from 'react';
import { getVideo, getVideos, getVideosRecommend } from '../services/sffService';
import environment from '../environment';

export function useGetVideo(videoId) {
	const [ video, setVideo ] = useState([]);
	const [ url, setUrl ] = useState();
	useEffect(
		() => {
			getVideo(videoId).then((response) => response.json()).then((res) => {
				setVideo(res.videos);
				setUrl(`${environment.playerSrc}${res.videos[0].idvideo}?autoplay=1`);
			});
		},
		[ videoId ]
	);
	return { video, url };
}

export function useGetVideos() {
	const [ videos, setVideos ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	useEffect(() => {
		setLoading(true);
		getVideos().then((response) => response.json()).then((res) => {
			console.log('RESPUESTA: ', res);
			setVideos(res.videos);
			setLoading(false);
		});
	}, []);
	return { videos, loading };
}

export function useGetRecommendations(loadMore, setLoadMore) {
	const [ videos, setVideos ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	useEffect(
		() => {
			getVideosRecommend().then((response) => response.json()).then((res) => {
				setVideos((prevData) => {
					console.log('PREV DATA: ', prevData);
					if (prevData) {
						return [ ...prevData, ...res.videos ];
					} else {
						return(res.videos);
					}
                });
                setLoading(false);
                setLoadMore(false)

				//setVideos([oldData => [...oldData, res.videos]])
			});
		},
		[ loadMore ]
	);
	return { videos, setVideos, loading };
}
