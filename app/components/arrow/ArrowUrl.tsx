'use client'
import React, { FC } from 'react';
import styles from "./ArrowUrl.module.scss";

type OwnProps = {
    onClick:() => void;
}

const ArrowUrl:FC<OwnProps> = ({onClick}) => {
  return (
    <div onClick={() => onClick()} className={`${styles.wrapper_arrow} button-animated`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M16.5 7C16.75 7 17 7.25 17 7.5V14.5C17 14.7812 16.75 15 16.5 15C16.2188 15 16 14.7812 16 14.5V8.71875L7.84375 16.875C7.65625 17.0625 7.3125 17.0625 7.125 16.875C6.9375 16.6875 6.9375 16.3438 7.125 16.1562L15.2812 8H9.5C9.21875 8 9 7.78125 9 7.5C9 7.25 9.21875 7 9.5 7H16.5Z" fill="white"/>
            </svg>
    </div>

  )
}

export default ArrowUrl