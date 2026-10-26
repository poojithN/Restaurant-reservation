import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";
import { SearchIcon } from "./Icons.jsx";

const API = "https://restaurantdata.onrender.com";

export default function SearchForm({ initialState = "", initialCity = "" }) {
  const navigate = useNavigate();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState(initialState);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [error, setError] = useState("");

  // 1. Fetch all states when the component loads
  useEffect(() => {
    fetch(API + "/states")
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch(() => setError("Could not load states."));
  }, []);

  // 2. Fetch cities every time a state is selected
  useEffect(() => {
    if (!selectedState) {
      setCities([]);
      return;
    }
    fetch(API + "/cities/" + encodeURIComponent(selectedState))
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch(() => setError("Could not load cities."));
  }, [selectedState]);

  function handleStateChange(stateName) {
    setSelectedState(stateName);
    setSelectedCity(""); // reset the city when the state changes
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!selectedState || !selectedCity) {
      setError("Please choose a state and a city.");
      return;
    }
    setError("");
    navigate("/search?state=" + encodeURIComponent(selectedState) + "&city=" + encodeURIComponent(selectedCity));
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <Dropdown
        id="state"
        placeholder="State"
        options={states}
        value={selectedState}
        onChange={handleStateChange}
      />
      <Dropdown
        id="city"
        placeholder="City"
        options={cities}
        value={selectedCity}
        onChange={setSelectedCity}
        disabled={!selectedState}
      />
      <button type="submit" id="searchBtn" className="primary-btn">
        <SearchIcon color="#fff" /> Search
      </button>
      {error && <span className="form-error">{error}</span>}
    </form>
  );
}
