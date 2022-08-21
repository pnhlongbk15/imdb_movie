import React from 'react';
import { Link } from 'react-router-dom';
// component
import HeroSlide from '../component/main/hero-slide/HeroSlide';
import MoviesList from '../component/main/movie-list/MovieList';
import { Button } from '../component/side/button/Button';

// data
import { category, specified_Movie, specified_Tv } from '../api/fetchData';

const Home = () => {

  return (
    <>  
      <HeroSlide/>
      <section className='container mb-3'>
        <div className='section__header mb-2'>
          <h2>Trending Movies</h2>
          <Link to={`/${category.movie}/${specified_Movie.popular}`} >
            <Button className="outline-btn small">View more</Button>
          </Link>
        </div>
        <MoviesList category={category.movie} specify={specified_Movie.popular}/>
      </section>

      <section className='container mb-3'>
        <div className='section__header mb-2'>
          <h2>Top Rated Movies</h2>
          <Link to={`/${category.movie}/${specified_Movie.top_rated}`} >
            <Button className="outline-btn small">View more</Button>
          </Link>
        </div>
        <MoviesList category={category.movie} specify={specified_Movie.top_rated}/>
      </section>

      <section className='container mb-3'>
        <div className='section__header mb-2'>
          <h2>Trending TV</h2>
          <Link to={`/${category.tv}/${specified_Tv.popular}`} >
            <Button className="outline-btn small">View more</Button>
          </Link>
        </div>
        <MoviesList category={category.tv} specify={specified_Tv.popular}/>
      </section>

      <section className='container mb-3'>
        <div className='section__header mb-2'>
          <h2>Top Rated Movies</h2>
          <Link to={`/${category.tv}/${specified_Tv.top_rated}`} >
            <Button className="outline-btn small">View more</Button>
          </Link>
        </div>
        <MoviesList category={category.tv} specify={specified_Tv.top_rated}/>
      </section>

    </>
  )
}

export default Home;
