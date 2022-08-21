import React from 'react';
// data
import { baseConfig } from '../../../api/baseConfig';
// style
import './person-info.scss'

const PersonPoster = ({person,className}) => (
  <div className= {`${className}__poster mb-3`}>
    <img 
      src={`${baseConfig.originalImage(person.profile_path)}`}
      alt=''   
    />
  </div>
)

const PersonInfo = ({person}) => {
  
  return (
    <div className='detail-person__info'>
      <PersonPoster className={'detail-person__info'} person={person}/>
      
      <div className='detail-person__info__content'>
        <div className='personal-info'>
          <div className='known-for mb-2'>
            <h1 className='small-title'>Known for</h1>
            <p>{person.known_for_department}</p>
          </div>
          <div className='known-credits mb-2'>
            <h1 className='small-title '>gender</h1>
            <p>{person.gender === 1 ? 'female' : 'male'}</p>
          </div>
          <div className='birthday mb-2'>
            <h1 className='small-title'>birthday</h1>
            <p>{person.birthday}</p>
          </div>
          <div className='place-of-birth mb-2'>
            <h1 className='small-title'>place of birth</h1>
            <p>{person.place_of_birth}</p>
          </div>
          <div className='also-known-as mb-2'>
            <h1 className='small-title'>also known as</h1>

            {person.also_known_as.map((e,i)=> (
              <p key={i} className='mb-1'>{e}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonInfo;

