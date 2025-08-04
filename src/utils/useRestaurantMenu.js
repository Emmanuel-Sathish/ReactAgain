import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  useEffect(() => {
    fetchRest();
  }, []);

  const [resData, setResData] = useState(null);

  const fetchRest = async () => {
    const fetchData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.08950&lng=80.27390&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await fetchData.json();

    console.log("restaurantData==>", jsonData);

    setResData(jsonData);
  };

  return resData;
};

export default useRestaurantMenu;
