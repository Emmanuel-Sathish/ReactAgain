import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

  return (
    <div className="body">
      <div className="filter">
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
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
