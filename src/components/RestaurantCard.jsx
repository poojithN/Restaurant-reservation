import { ShopIcon, ThumbIcon } from "./Icons.jsx";

// Shows one restaurant. The API field names have spaces in them.
export default function RestaurantCard({ restaurant, onBook }) {
  const name = restaurant["Restaurant Name"];
  const address = restaurant["Address"];
  const city = restaurant["City"];
  const state = restaurant["State"];
  const rating = restaurant["Overall Rating"];

  return (
    <div className="r-card">
      <div className="r-icon"><ShopIcon /></div>
      <div className="r-body">
        <h3>{name}</h3>
        <p className="r-place">{city}, {state}</p>
        <p className="r-address">{address}</p>
        <p className="r-fee"><b>FREE</b> <s>₹500</s> Registration fee</p>
        <div className="r-divider" />
        <span className="badge"><ThumbIcon /> {rating}</span>
      </div>
      <div className="r-action">
        <span className="avail">Available Today</span>
        <button className="primary-btn" onClick={() => onBook(restaurant)}>
          Book FREE Reservation
        </button>
      </div>
    </div>
  );
}
