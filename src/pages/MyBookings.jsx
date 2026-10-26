import { useEffect, useState } from "react";
import AdPanel from "../components/AdPanel.jsx";
import AppDownload from "../components/AppDownload.jsx";
import { ShopIcon, ThumbIcon, SearchIcon } from "../components/Icons.jsx";

// "2025-03-04" -> "04 March 2025"
function prettyDate(dateString) {
  const [y, m, d] = dateString.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return String(d).padStart(2, "0") + " " + date.toLocaleDateString("en-US", { month: "long" }) + " " + y;
}

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("");

  // Load saved bookings from localStorage when the page opens
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(saved);
  }, []);

  // Only show bookings whose restaurant name contains the search text
  const visible = bookings.filter((b) =>
    b.name.toLowerCase().includes(filter.toLowerCase())
  );

  function handleSearch(event) {
    event.preventDefault();
    setFilter(text);
  }

  return (
    <>
      <div className="blue-banner">
        <div className="page-width bookings-head">
          <h1 className="bookings-title">My Bookings</h1>
          <form className="search-card slim grow" onSubmit={handleSearch}>
            <input
              className="text-input"
              placeholder="Search By Restaurant"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className="primary-btn"><SearchIcon color="#fff" /> Search</button>
          </form>
        </div>
      </div>

      <section className="page-width section">
        <div className="list-with-ad">
          <div className="card-list">
            {visible.length === 0 && <p className="grey">You have no bookings yet.</p>}
            {visible.map((b) => (
              <div className="r-card" key={b.id}>
                <div className="r-icon"><ShopIcon /></div>
                <div className="r-body">
                  <h3>{b.name}</h3>
                  <p className="r-place">{b.city}, {b.state}</p>
                  <p className="r-address">{b.address}</p>
                  <p className="r-fee"><b>FREE</b> <s>₹500</s> Registration fee</p>
                  <div className="r-divider" />
                  <span className="badge"><ThumbIcon /> {b.rating}</span>
                </div>
                <div className="r-action top">
                  <div className="chips">
                    <span className="chip blue-chip">{b.time}</span>
                    <span className="chip green-chip">{prettyDate(b.date)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <AdPanel variant="yellow" />
        </div>
      </section>

      <AppDownload />
    </>
  );
}
