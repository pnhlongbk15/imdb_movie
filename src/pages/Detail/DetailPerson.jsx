import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// component
import PersonInfo from './detail-person/PersonInfo';

//style
import './detail-person.scss';
// data
import { baseConfig } from '../../api/baseConfig';
import fetchData from '../../api/fetchData';
import PageHeader from '../../component/main/page-header/PageHeader';
import PersonStory from './detail-person/PersonStory';

const DetailPerson = () => {
    const [person, setPerson] = useState(null);
    const { id_person } = useParams();
    useEffect(()=>{
        const detailPerson = async () => {
            try {
                const response = await fetchData.getDetailPerson(id_person);
                setPerson(response)
                console.log(person)
            } catch(e) {
                console.log('detail person:',e)
            }
        }
        detailPerson();
        console.log(2)
    },[id_person])

  return (
    <>
        {
            person && (
                <>
                    <PageHeader>

                    </PageHeader>
                    <section className='detail-person container mb-5'>
                        <PersonInfo person={person}/>
                        <PersonStory person={person} />
                    </section> 
                </>
            )
        }
    </>
  )
}

export default DetailPerson;

{/* <div className='detail-person__content__info'>
                    <div className='name mb-2'>{person.name}</div>
                    <div className='biography'>
                        <h1 className='title mb-1'>biography</h1>
                        <p className='content'>{person.biography}</p>
                    </div>
                </div> */}