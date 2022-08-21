import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//component
import PageHeader from '../component/main/page-header/PageHeader';
import MovieGrid from '../component/main/movie-grid/MovieGrid';
//data
import { category as cate, specified_Movie, specified_Tv} from '../api/fetchData';

const Catalog = () => {
  const { category, specify } = useParams()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[category,specify])
  return (
    <>
      <PageHeader>
        {category === cate.movie ? "movie" : "tivi"}
      </PageHeader>
      <MovieGrid 
        category={category === cate.movie ? cate.movie : cate.tv} 
        specify={(category === cate.movie ? specified_Movie[specify] : specified_Tv[specify]) || 'popular'}
      />
    </>
  )
}

export default Catalog;
