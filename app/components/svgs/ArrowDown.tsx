import React, { FC } from 'react'

type OwnProps = {
  className?:string,
}
const ArrowDown:FC<OwnProps> = ({className}) => {
  return (
    <svg  className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.4688 16.5312L5.46875 10.5312C5.15625 10.25 5.15625 9.78125 5.46875 9.46875C5.75 9.1875 6.21875 9.1875 6.53125 9.46875L12 14.9688L17.4688 9.5C17.75 9.1875 18.2188 9.1875 18.5312 9.5C18.8125 9.78125 18.8125 10.25 18.5312 10.5312L12.5 16.5312C12.2188 16.8438 11.75 16.8438 11.4688 16.5312Z" fill="white"/>
    </svg>

  )
}

export default ArrowDown