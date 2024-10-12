'use client'
import React, { FC } from 'react';
import styles from "./BorderedButton.module.scss";
import ArrowUrl from '../arrow/ArrowUrl';

type OwnProps = {
    text:string,
    onClick:() => void;
}

const BorderedButton:FC<OwnProps> = ({text,onClick}) => {
  return (
    <>
    <div onClick={() => onClick()} className={`${styles.wrapper_button} bordered-button`}>
    <span>{text}</span> 
    <ArrowUrl onClick={() => onClick()}/>
    </div>
    </>
  )
}

export default BorderedButton