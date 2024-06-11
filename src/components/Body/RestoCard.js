import React from 'react';
import {IMG_URL} from '../../utils/constants';

const RestoCard = ({resInfo}) => {
  const {name,cuisines,costForTwo,avgRating,cloudinaryImageId}=resInfo?.info;
  return (
    <div className='card-container'>
        <img className='img-rest'src={`${IMG_URL}${cloudinaryImageId}`}></img>
      <h3 class="item">{name}</h3>
      <h5 class="item">{cuisines.join(", ")}</h5>
      <h5 class="item">{costForTwo}</h5>
      <h5 class="item">Rating: {avgRating}</h5>
    </div>
  )
}

export default RestoCard
