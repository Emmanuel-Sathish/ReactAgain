import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { restaurants } from "../utils/mockData";
import { useState,useEffect } from "react";
import { Link } from "react-router";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants,setfilteredRestaurants] = useState([])
  const [searchValue,setSearchValue] = useState("")

  //res.cards[0].card.gridElements.restaurants

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();

      console.log("jsonData of fetchData==>", jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

      let newList = jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants

      setfilteredRestaurants(newList)

      console.log("filteredRestaurants==>",filteredRestaurants)

      setListOfRestaurants(newList)
    } catch (e) {
      console.log("error in fetchData==>", e.message);
    }
  };

  if(listOfRestaurants.length === 0){
    return (<Shimmer></Shimmer>)
  }

  return (
    <div className="body">
      <div className="filter">
        <div>
          <input type="text" className="search-box" value={searchValue} onChange={(e)=>{
            setSearchValue(e.target.value)
          }}></input>
          <button className="search-btn" onClick={()=>{ console.log(searchValue)
            let filtered = filteredRestaurants.filter((item)=>{
              return item.info.name.toLowerCase().includes(searchValue.toLowerCase())
            })

            console.log("filtered==>",filtered)

            setListOfRestaurants(filtered)
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRes = restaurants.filter((res) => {
              return res.info.avgRating > 4.2;
            });

            console.log("filtered==>", filteredRes);
            setListOfRestaurants(filteredRes);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
          <Link to={"/restaurant/"+ restaurant.info.id} key={restaurant.info.id}> <RestaurantCard
              resData={restaurant.info}
            /></Link>  
          );
        })}
      </div>
    </div>
  );
};

export default Body;
