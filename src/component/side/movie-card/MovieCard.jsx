import React from 'react';
import { Link } from 'react-router-dom';
//data
import { baseConfig } from '../../../api/baseConfig';
import { category } from '../../../api/fetchData';
//component
import { Button } from '../button/Button';
//style
import "./movie-card.scss";

export const MovieCard = (props) => {
    const item = props.item;
    const url_bg = baseConfig.w500Image(item.poster_path || item.backdrop_path);
    const linkDetail = '/' + category[props.category] + '/detail/' + item.id;
    
  return (
    <Link to={linkDetail}>
        <div className='movie-card'>
            <div className='movie-card__poster' style={{backgroundImage: `url(${url_bg})`}}>
                {/* <Button>
                    <i class="fa-solid fa-play"></i>
                </Button> */}
            </div>
            <div className='movie-card__content'>
                <p className='title'>{item.title || item.original_title || item.name || item.original_name}</p>
            </div>
        </div>
    </Link>
  )
}
