import React, { FC } from 'react'
import styles from './AppreciateButton.module.scss'
type Props = {
    onClick: () => void,
}

const AppreciateButton:FC<Props> = ({onClick}) => {
  return (
    <>
    <div className={styles.wrapper_button} onClick={() => onClick()}>
        <p>Appreciate</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0039 4.41016C14.918 4.62109 15.5156 5.5 15.3398 6.41406L15.2344 6.80078C15.0586 7.75 14.707 8.62891 14.25 9.4375H19.3125C20.2266 9.4375 21 10.2109 21 11.125C21 11.793 20.6133 12.3555 20.0859 12.6367C20.4727 12.9531 20.7188 13.4102 20.7188 13.9375C20.7188 14.7812 20.1211 15.4492 19.3477 15.625C19.4883 15.8711 19.5938 16.1523 19.5938 16.4688C19.5938 17.2422 19.1016 17.875 18.3984 18.0859C18.4336 18.1914 18.4688 18.332 18.4688 18.4375C18.4688 19.3867 17.6953 20.125 16.7812 20.125H13.3359C12.668 20.125 12.0352 19.9492 11.4727 19.5625L10.1016 18.6836C9.1875 18.0508 8.625 16.9961 8.625 15.8711V14.5V12.8125V11.9688C8.625 10.9141 9.08203 9.96484 9.89062 9.33203L10.1367 9.12109C11.0508 8.34766 11.7188 7.32812 11.9297 6.13281L12 5.74609C12.2109 4.83203 13.0898 4.23438 14.0039 4.41016ZM4.125 10H6.375C6.97266 10 7.5 10.5273 7.5 11.125V19C7.5 19.6328 6.97266 20.125 6.375 20.125H4.125C3.49219 20.125 3 19.6328 3 19V11.125C3 10.5273 3.49219 10 4.125 10Z" fill="#12141B"/>
        </svg>

    </div>
    </>
  )
}

export default AppreciateButton