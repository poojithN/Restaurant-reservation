import { Link } from "react-router-dom";
import { Logo } from "./Icons.jsx";

export default function Navbar() {
  return (
    <>
      <div className="topbar">
        Stay updated with the latest restaurants and maximize your dining experience with our platform.
      </div>
      <header className="navbar">
        <Link to="/" className="logo"><Logo /></Link>
        <nav className="nav-links">
          <Link to="/">Find Restaurants</Link>
          <a href="/#locations">Locations</a>
          <Link to="/my-bookings">Reservations</Link>
          <a href="/#menus">Special Menus</a>
          <a href="/#software">Restaurant Management Software</a>
          <a href="/#services">Services</a>
          <Link to="/my-bookings" className="nav-btn">My Bookings</Link>
        </nav>
      </header>
    </>
  );
}
