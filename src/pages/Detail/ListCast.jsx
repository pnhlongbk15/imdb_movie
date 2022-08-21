import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

//data
import fetchData from '../../api/fetchData';
import { baseConfig } from '../../api/baseConfig';

const ListCast = () => {
    const [cast, setCast] = useState([]);
    const { category,id } = useParams();
    useEffect(()=>{
        // get cast
        const getCast = async ()=>{
            const credit = await fetchData.credits(category,id);
            setCast(credit.cast.slice(0,5));
        }
        getCast();
    },[category,id])

  return (
    <>
        <h1 className='mb-1'>Cast</h1>
        { cast.map((e,i)=> (
            <div key={i} className='cast__info'>
            <img 
                className='mb-1' 
                src={baseConfig.originalImage(e.profile_path)} alt=''
                />
                <p className='cast-name'>{e.name || e.original_name}</p>
            </div>
        ))}
    </>
  )
}

export default ListCast;
