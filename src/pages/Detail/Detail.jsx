import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//component
import { Button } from '../../component/side/button/Button';
import ListCast from './ListCast';
import ShortVideos from './short-video/ShortVideos';
import MoviesList from '../../component/main/movie-list/MovieList';

// style
import './detail.scss';
// data
import fetchData from '../../api/fetchData';
import { baseConfig } from '../../api/baseConfig';

const Detail = () => {
  const [item,setItem] = useState(null);
  
  const { category, id } = useParams();
  console.log(category,id)
  useEffect(()=>{
    const detail = async () => {
      // get detail film
      const response = await fetchData.getDetail(category, id, {params:{}});
      setItem(response);
      window.scrollTo(0,0); // load to header of page

    }
    detail()
  },[category,id])
  
  return (
    <>
      {
        item && (
          <section className='movie-detail mb-10'>
            <div 
              className='movie-detail__banner' 
              style={{backgroundImage: `url(${baseConfig.originalImage(item.backdrop_path || item.poster_path)})`}}
              />
              
            <div className='movie-detail__content container mb-10'>
              <div 
                className='movie-detail__content__poster' 
                style={{backgroundImage: `url(${baseConfig.w500Image(item.poster_path || item.backdrop_path)})`}}
                />
              <div className='movie-detail__content__info'>
                <h1 className='title'>{item.title || item.original_title || item.name || item.original_name}</h1>
                <div className='genres'>
                  {
                    item.genres.map((e,i)=> <Button key={e.id} className="outline-btn small">{e.name}</Button>)
                  }
                </div>  
                <div className='overview'>
                  { item.overview }
                </div>
                <div className='cast'>
                  <ListCast/>
                </div>
              </div>
            </div>

            <div className='movie-detail__short-video container mb-3'>
              <ShortVideos />
            </div>
            <div className='movie-detail__similar container'>
              <h1 className='mb-2'>Similar</h1>
              <MoviesList category={category} id={id} similar={true} />  
            </div>
            
          </section>
        )
      }
    </>
  )
}

export default Detail;
