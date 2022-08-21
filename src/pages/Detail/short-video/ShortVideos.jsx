import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//data
import fetchData from '../../../api/fetchData';
import { baseConfig } from '../../../api/baseConfig';
// style
import './short-video.scss';

const ShortVideos = () => {
    const [ listVideo, setListVideo ] = useState([]);
    const { category, id } = useParams();

    useEffect(()=>{
        const getListVideo = async ()=> {
            const response = await fetchData.getVideo(category, id);
            setListVideo(response.results.slice(0,3))
            console.log(response.results.slice(0,3))
        }
        getListVideo();
    },[category,id])
  return (
    <>
        {
            listVideo.map((video,i)=>(
                <div key={i} className='short-video__content mb-3'>
                    <div className='title mb-1'>{video.name}</div>
                    <div className='video'>
                        <iframe 
                            src={baseConfig.baseEmbed + video.key}
                            title="short-video" width="100%" height="100%"
                            />
                    </div>
                </div>
            ))
        }
      
    </>
  )
}

export default ShortVideos;
