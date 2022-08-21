import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//component
import { Button } from '../button/Button';
//style
import "./search-bar.scss"

export const SearchBar = (props) => {
    const [ keyword, setKeyword] = useState(props.keyword || '');
    const { category } = useParams();

    const navigate = useNavigate();

    const goToSearch = useCallback(() => {
        if (keyword.trim().length > 0) {
            navigate('/' + category + '/search/' + keyword.trim()) ;
        }
    },[keyword])

    useEffect(()=>{
        const enterEvent = (e)=>{
            e.preventDefault()
            if (e.keyCode === 13) {
                goToSearch()
            }
        }
        document.addEventListener('keyup',enterEvent)
        return () => {
            document.removeEventListener('keyup',enterEvent)
        }

    },[keyword])

  return (
    <div className='search-bar'>
        <input 
            placeholder='Search'
            value={keyword}
            onChange = {(e)=> setKeyword(e.target.value)}
        />
        <Button 
            className="outline-btn small"
            onClick={goToSearch}
            >   
            Search
        </Button>
    </div>
  )
}
