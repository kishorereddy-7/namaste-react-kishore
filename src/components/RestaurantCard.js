const RestaurantCard = () => {
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/o5bbufmcjoqdfvtm7r1n"
      />
      <h3>Meghana Foods</h3>
      <h4>Briyani, North Indian, Asian</h4>
      <h4>4.4 starts</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

export default RestaurantCard;
