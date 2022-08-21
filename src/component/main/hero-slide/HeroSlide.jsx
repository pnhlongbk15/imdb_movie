import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// component 
import { Button } from '../../side/button/Button';
import { Modal } from '../../side/modal/Modal';

// style
import "./hero-slide.scss";
// data
import fetchData, { specified_Movie } from '../../../api/fetchData';
import { baseConfig } from '../../../api/baseConfig';


const HeroSlideItem = (props) => {
    const [urlTrailer, setUrlTrailer] = useState('');

    const item = props.item;
    const backgroundImage = baseConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);
    const posterImage = baseConfig.w500Image(item.poster_path ? item.poster_path : item.backdrop_path);

    const navigate = useNavigate();

    const getUrlTrailer = async () => {
        if ( props.className && props.className === "active"){
            const response = await fetchData.getVideo('movie',item.id);
            const urlTrailerCurr = baseConfig.baseEmbed + response.results[0].key; 
            setUrlTrailer(urlTrailerCurr)
        } 
    }
    useEffect(()=>{
        const modal = document.querySelector('.modal');
        
        if (urlTrailer) {
            modal.querySelector('.modal__content > iframe').setAttribute('src',urlTrailer);
            setUrlTrailer('');
            modal.classList.add('active');
        } else {
            modal.querySelector('.modal__content > iframe').innerHTML = 'No Trailer';
        }
    },[urlTrailer])

    return (
        <div className={`hero-slide__item ${props.className}`}  style={{backgroundImage:`url(${backgroundImage})`}}>
            <div className='hero-slide__item__content'>
                <div className='hero-slide__item__content__info container'>
                    <h2 className='title'>{item.title}</h2>
                    <div className='overview'>{item.overview}</div>
                    <div className='btns'>
                        <Button onClick={() => navigate('/movie/detail/' + item.id)}>Watch now</Button>
                        <Button className="outline-btn" onClick={getUrlTrailer}>Watch trailer</Button>
                    </div>
                </div>
                <div className='hero-slide__item__content__poster'>
                    <img src={`${posterImage}`} alt=""/>
                </div>
            </div>
        </div>
    )
}

const HeroSlide = () => {
    const [movieItems, setMovieItems] = useState([]);

    useEffect(()=>{
      const getMovies = async () =>{
        const params = {page: 1};
        try{
            const response = await fetchData.getMovieList(specified_Movie.popular,{params});
            setMovieItems(response.results.slice(0,4));
        } catch(e) {
            console.log("Error")
        }
      }
      getMovies();

    },[])

  return (
    <div className="hero-slide">
        <Swiper>
            {
                movieItems.map((item,i)=>(
                    <SwiperSlide key={i}>
                        {
                            ({isActive}) => (
                                <HeroSlideItem item={item}  className={`${isActive ? 'active' : ''}`}/>
                            )
                        }
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <Modal />
    </div>
  )
}
export default HeroSlide;



{/* https://www.youtube.com/embed/br5cxQXKtuc" */}
