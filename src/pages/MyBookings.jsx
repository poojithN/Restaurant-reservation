import { useEffect, useState } from "react";
import AdPanel from "../components/AdPanel.jsx";
import AppDownload from "../components/AppDownload.jsx";
import { ShopIcon, ThumbIcon, SearchIcon } from "../components/Icons.jsx";

// "2025-03-04" -> "04 March 2025". Anything else is shown as it is.
function prettyDate(value) {
  const text = String(value || "");
  const match = text.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return text;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return match[3] + " " + date.toLocaleDateString("en-US", { month: "long" }) + " " + match[1];
}

// Saved bookings may use different key names, so we look for each value
// under every name we expect and fall back to an empty string.
function cleanBooking(raw, index) {
  return {
    id: raw.id || index,
    name: raw.name || raw["Restaurant Name"] || raw.restaurantName || raw.restaurant || "",
    city: raw.city || raw["City"] || "",
    state: raw.state || raw["State"] || "",
    address: raw.address || raw["Address"] || "",
    rating: raw.rating ?? raw["Overall Rating"] ?? "",
    date: raw.date || raw.bookingDate || raw.reservationDate || "",
    time: raw.time || raw.bookingTime || raw.timeSlot || raw.slot || "",
  };
}

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("");

  // Load saved bookings from localStorage when the page opens
  useEffect(() => {
    let saved = [];
    try {
      const parsed = JSON.parse(localStorage.getItem("bookings") || "[]");
      if (Array.isArray(parsed)) saved = parsed;
    } catch (error) {
      saved = []; // broken data in storage: start with an empty list
    }
    setBookings(saved.map(cleanBooking));
  }, []);

  // Only show bookings whose restaurant name contains the search text
  const visible = bookings.filter((b) =>
    String(b.name).toLowerCase().includes(filter.toLowerCase())
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
            {visible.map((b, index) => (
              <div className="r-card" key={b.id + "-" + index}>
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
