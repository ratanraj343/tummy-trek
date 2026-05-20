const ResturantCard = ({
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  costForTwo,
}) => {
  return (
    <div className="res_card">
      <img
        src={image}
        alt={name}
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/300x200?text=No+Image";
        }}
      />

      <h3>{name}</h3>

      {/* Cuisine */}
      <h4 className="cuisine">{cuisine}</h4>

      {/* Rating */}
      <h4>⭐ {rating}</h4>

      <div className="star">
        <h4>{deliveryTime} min</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default ResturantCard;
