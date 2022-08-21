import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

//style
import './person-story.scss';

const PersonStory = ({person}) => {
  return (
    <div className='detail-person__story'>
      <div className='detail-person__story__name mb-2'>{person.name}</div>
      <div className='detail-person__story__biography'>
        <h1 className='small-title mb-1'>biography</h1>
        <p>{person.biography}</p>
      </div>
      <div className='detail-person__story__known-for'>
        <Swiper>
          <SwiperSlide>
            
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default PersonStory;
