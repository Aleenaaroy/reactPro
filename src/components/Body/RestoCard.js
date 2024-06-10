import React from 'react';

const RestoCard = ({resInfo}) => {
  const {name,cuisines,costForTwo,avgRating,cloudinaryImageId}=resInfo?.info;
  return (
    <div className='card-container'>
        <img className='img-rest'src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}></img>
      <h3 class="item">{name}</h3>
      <h5 class="item">{cuisines.join(", ")}</h5>
      <h5 class="item">{costForTwo}</h5>
      <h5 class="item">Rating: {avgRating}</h5>
    </div>
  )
}

export default RestoCard
