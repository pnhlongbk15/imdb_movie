import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

//data 
import { category as cate } from '../../../api/fetchData';
import fetchData from '../../../api/fetchData';
//component
import { MovieCard } from '../../side/movie-card/MovieCard';
//style
import "./movie-list.scss";


const MoviesList = ({category,specify,similar=false,id=null}) => {
  const [moviesList, setMoviesList] = useState([]);
  
  useEffect(()=>{
    const getList = async ()=> {
      let response = null;
      const params = {};

      if (!similar) {
        switch(category){
          case cate.movie:
            response = await fetchData.getMovieList(specify, {params});
            console.log(category,specify)

            break;
          default:
            response = await fetchData.getTvList(specify, {params});
        }
      } else {
          response = await fetchData.similar(category,id);
      }
      
      setMoviesList(response.results);
    }
    getList();

  },[])  

  return (
    <div className='movie-list'>
      <Swiper>
        {
          moviesList.map((e,i)=>(
            <SwiperSlide key={i} >
              <MovieCard category={category} item={e}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default MoviesList;
