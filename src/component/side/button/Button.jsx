import React from 'react';

//style
import "./button.scss";

export const Button = (props) => {
  return (
    <button className={` btn ${props.className}`} onClick={ props.onClick ? props.onClick : null}>
        {props.children}
    </button>
  )
}

