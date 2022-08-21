import React, { useEffect, useState } from 'react';
import fetchData from '../../../api/fetchData';
import { Link } from 'react-router-dom';

// component
import { Button } from '../../side/button/Button';
//style
import './cast-grid.scss'
// data
import { baseConfig } from '../../../api/baseConfig';

const CastGrid = () => {
    const [listCast, setListCast] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        const getList = async ()=>{
            const params = {
                page: page
            };

            try {
                const response = await fetchData.getCastList({params});
                if (listCast.length === 0){
                    setListCast(response.results);
                } else{
                    setListCast([...listCast,...response.results]);
                }
                console.log(response.results);
            } catch (e) {
                console.log('error is fetchData:',e);
            }
        }
        getList();

    },[page])

    const loadMore = ()=>{
        setPage(page+1);
    }


  return (
    <section className='container'>
        <div className='cast-grid mb-3'>
        {
            listCast.map((item,i)=>(
                <Link key={i} to={'/person/detail/'+item.id}>
                    <div className='cast-grid__card'>
                        <div className='cast-grid__card__content'>
                            <div 
                                style={{backgroundImage:`url(${baseConfig.originalImage(item.profile_path)})`}}
                                className='cast-grid__card__content__poster mb-1'
                                />
                            <div className='cast-grid__card__content__name mb-1'>
                                {item.name}
                            </div>
                        </div>
                    </div>
                </Link>
            ))
        }
        </div>
        
        <div className='load-more mb-5'>
            <Button className='outline-btn' onClick={loadMore}>
                Load more
            </Button>
        </div>

    </section>
  )
}

export default CastGrid;
