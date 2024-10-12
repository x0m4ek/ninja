import React, { FC } from 'react'
import styles from "./FilterButton.module.scss";
import SelectedArrow from '../svgs/SelectedArrow';
type OwnProps = {
    isSelected:boolean,
    text:string,
    onClick:() => void;
}

const FilterButton:FC<OwnProps> = ({isSelected,text, onClick}) => {
  return (
    <>
    <div className={`${styles.wrapper_filter} ${isSelected ? styles.isSelected : ""}`} onClick={() => onClick()}>
    <span>{text}</span> <div className={styles.selected}>
    <SelectedArrow />
        </div>
    </div>
    </>
  )
}

export default FilterButton