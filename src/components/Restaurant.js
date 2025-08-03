import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const Restaurant = () => {
  const { id } = useParams();

  useEffect(() => {
    fetchRest();
  }, []);

  const [resData, setResData] = useState(null);

  const fetchRest = async () => {
    const fetchData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.08950&lng=80.27390&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await fetchData.json();

    console.log("restaurantData==>", jsonData);

    setResData(jsonData);
  };

  if (resData == null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage } =
    resData?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
      ?.card;

  console.log("name==>", name);
//   console.log("itemCards==>", itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <h2>{avgRating}</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Restaurant;
