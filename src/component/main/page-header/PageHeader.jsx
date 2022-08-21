import React from 'react'

import './page-header.scss';
import bg from '../../../assets/footer-bg.jpg';

const PageHeader = props => {
  return (
    <section className='page-header mb-3' style={{backgroundImage: `url(${bg})`}}>
        {props.children}
    </section>
  )
}

export default PageHeader
