const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla } = props.resData;

  return (
    <div className="p-4 m-4 w-[200px] bg-gray-100 rounded-sm hover:w-[210px] hover:bg-gray-500 h-auto">
      <img
        className=""
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c43bcda7c717b8a1a8885587dfde8549"
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{avgRating}⭐</h4>
      <h4>{sla.deliveryTime}mins</h4>
    </div>
  );
};

export default RestaurantCard;