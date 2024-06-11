import React ,{useState} from "react";
import Search from "./Search";
import RestoCard from "./RestoCard";
import "./Body.css";
import resList from "../../utils/mockData";

const Restaurants = () => {
  const[listOfRest,setListOfRest]=useState(resList);
  const handleTopRest=()=>{
    const filtered=listOfRest.filter((res)=>res.info.avgRating >4.5);
    setListOfRest(filtered);
  }

  return (
    <div className="body-container">
      <Search />
      <button className="top-btn" onClick={handleTopRest}>Top Restaurants</button>
      <div className="restocards-container">
        {listOfRest.map((rest) => (
          <RestoCard key={rest.info.id} resInfo={rest} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
