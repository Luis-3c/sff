import React, {useState, useEffect} from 'react';
import VideoCard from '../videoCard/VideoCard';
import { getVideosRecommend } from '../../services/sffService';
import Loader from '../loader/Loader';

const Recommendations = () => {
    const[videos, setVideos] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(()=>{
        getVideosRecommend().then(response=>response.json()).then(res=>{
            setVideos(res.videos)
            setLoading(false)
        })
    },[])
    return (
        <div>
            {loading ?  <Loader></Loader> 
            : videos.map(video=><VideoCard {...video} key={video.id} />)
            }
        </div>
    );
};

export default Recommendations;