import React from 'react';

//style
import "./modal.scss";

export const Modal = ()=> {
    const onClose = () => {
        const modal = document.querySelector('.modal')
        modal.classList.remove('active')
        modal.querySelector('.modal__content > iframe').setAttribute('src','');
    }

  return (
    <div className="modal">
        <div className='modal__content'>
            <iframe title="trailer" width="100%" height="100%"/>
            <div className='modal__content__close' onClick={onClose}>
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
    </div>
  )
}
