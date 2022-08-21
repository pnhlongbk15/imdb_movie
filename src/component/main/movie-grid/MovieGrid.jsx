import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//style
import "./movie-grid.scss";
//component
import { Button } from '../../side/button/Button';
import { MovieCard } from '../../side/movie-card/MovieCard';
import { SearchBar } from '../../side/search-bar/SearchBar';

// data
import  fetchData, { category } from '../../../api/fetchData';

const MovieGrid = (props) => {
  const [listItems, setListItems] = useState([]);
  const [page, setPage] = useState(1);
  const [cateCur, setCateCur] = useState('');

  const { keyword } = useParams();

  useEffect(()=>{
    setCateCur(props.category);
    if (cateCur !== props.category) {
      setPage(1)
    }
    const getList = async () => {
      let response = null;
      const params = {
        page: cateCur !== props.category ? 1 : page,
      }

      if (keyword === undefined) {
            switch(props.category){
              case category.movie:
                response = await fetchData.getMovieList(props.specify, {params})
                console.log(response)

                break;
              default:
                response = await fetchData.getTvList(props.specify, {params})
                console.log(response)

            }
      } else {
            const params = {
              page : page,
              query: keyword,
            }
            response = await fetchData.search(props.category,{params})
            console.log('search....')
      }
      
      if (listItems.length > 0 && props.category === cateCur && page > 1) {
        console.log("loadMore")
        setListItems([...listItems,...response.results]);
      } else {
        console.log("inital")
        setListItems(response.results);
      }
    }
    getList();

  },[page,keyword, props.category,props.specify])


  const loadMore = () => {
    setPage(page + 1);
  }

  return (
  
    <section className='movie-grid container mb-3'>
      <div className='movie-grid__search mb-2'>
        <SearchBar keyword={keyword}/>
      </div>
      <div className='movie-grid__display mb-3'>
        {
          listItems.map((e,i) => <MovieCard key={i} item={e} category={props.category}/>)
        }
      </div>
      <div className='movie-grid__loadmore'>
        <Button className="outline-btn" onClick={loadMore}>
          Load more
        </Button>
      </div>
    </section>
  )
}

export default MovieGrid;
