const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla } = props.resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c43bcda7c717b8a1a8885587dfde8549"
      ></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{avgRating}⭐</h4>
      <h4>{sla.deliveryTime}mins</h4>
    </div>
  );
};

export default RestaurantCard;