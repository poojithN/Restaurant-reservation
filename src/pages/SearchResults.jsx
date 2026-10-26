import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm.jsx";
import RestaurantCard from "../components/RestaurantCard.jsx";
import BookingModal from "../components/BookingModal.jsx";
import AdPanel from "../components/AdPanel.jsx";
import AppDownload from "../components/AppDownload.jsx";

const API = "https://restaurantdata.onrender.com";

export default function SearchResults() {
  const [params] = useSearchParams();
  const state = params.get("state") || "";
  const city = params.get("city") || "";

  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  // Fetch restaurants whenever the state or city in the URL changes
  useEffect(() => {
    if (!state || !city) return;

    setLoading(true);
    setError("");
    fetch(API + "/restaurants?state=" + encodeURIComponent(state) + "&city=" + encodeURIComponent(city))
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch(() => setError("Could not load restaurants. Please try again."))
      .finally(() => setLoading(false));
  }, [state, city]);

  return (
    <>
      <div className="blue-banner">
        <div className="search-card slim">
          <SearchForm initialState={state} initialCity={city} />
        </div>
      </div>

      <section className="page-width section">
        {loading && (
          <p className="loading">Loading restaurants… the server can take up to a minute to wake up.</p>
        )}
        {error && <p className="form-error">{error}</p>}

        {!loading && !error && state && city && (
          <>
            <h1 className="results-title">{restaurants.length} restaurants available in {city}</h1>
            <p className="verified">✓ Book tables with minimum wait-time &amp; verified restaurant details</p>
            <div className="list-with-ad">
              <div className="card-list">
                {restaurants.map((restaurant, index) => (
                  <RestaurantCard key={index} restaurant={restaurant} onBook={setSelectedRestaurant} />
                ))}
              </div>
              <AdPanel variant="dark" />
            </div>
          </>
        )}
      </section>

      <AppDownload />

      {selectedRestaurant && (
        <BookingModal restaurant={selectedRestaurant} onClose={() => setSelectedRestaurant(null)} />
      )}
    </>
  );
}
