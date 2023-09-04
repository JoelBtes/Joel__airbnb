import React from 'react'
import data from '../data'
import "./Card.css"
const Card = (props) => {
  let badgeText
  if(props.openSpots === 0){
    badgeText = "SOLD OUT"
  }else if(props.location === "Online"){
    badgeText = "ONLINE"
  }


  return (
    <div className='card'>
        {badgeText && <div className='card__badge'>{badgeText}</div>}
        <img src={`${process.env.PUBLIC_URL}/images/${props.img}`} className='card__image' alt="" />
        <div className='card__stats'>
            <img src={`${process.env.PUBLIC_URL}/images/Star 1.png`} className='card__star' alt=""/>
            <span>{props.raiting}</span>
            <span className='gray'>({props.reviewCount}) * </span>
            <span className='gray'>{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className='bolder'>{props.price}</span>/ person</p>
    </div>
  )
}

export default Card