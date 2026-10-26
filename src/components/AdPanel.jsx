// The tall promo poster on the right side of the search / bookings pages
export default function AdPanel({ variant = "dark" }) {
  if (variant === "yellow") {
    return (
      <aside className="ad ad-yellow">
        <h2>ARE YOU<br /><b>HUNGRY?</b></h2>
        <div className="ad-plate" />
        <p className="ad-off">50% OFF</p>
        <p className="ad-tag">NOODLES - PIZZA - BURGER</p>
      </aside>
    );
  }
  return (
    <aside className="ad ad-dark">
      <h2>SUPER<br /><span>DELICIOUS</span><br />FOOD</h2>
      <div className="ad-plate dark" />
      <p className="ad-off light">UP TO 50% OFF</p>
      <p className="ad-btn">ORDER NOW</p>
    </aside>
  );
}
