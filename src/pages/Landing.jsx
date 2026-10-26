import { useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm.jsx";
import HeroSwiper from "../components/HeroSwiper.jsx";
import AppDownload from "../components/AppDownload.jsx";
import { ChefIllustration } from "../components/Icons.jsx";

const tiles = ["Restaurants", "Locations", "Reservations", "Special Menus", "Services"];
const faqs = [
  "How does the reservation system work?",
  "What is your cancellation policy?",
  "Do you accommodate special dietary requirements?",
  "Can I make group reservations?",
];

export default function Landing() {
  const [activeTile, setActiveTile] = useState("Reservations");
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-kicker">Skip the wait! Reserve Online</p>
            <h1 className="hero-title">Table <span className="blue">Reservation</span></h1>
            <p className="hero-sub">Connect instantly with our platform to reserve tables at your favorite restaurants.</p>
            <a href="#search" className="small-btn">Find Restaurants</a>
          </div>
          <ChefIllustration />
        </div>

        <div className="search-card" id="search">
          <SearchForm />
          <p className="looking">You may be looking for</p>
          <div className="tiles">
            {tiles.map((t) => (
              <div
                key={t}
                className={"tile" + (t === activeTile ? " active" : "")}
                onClick={() => setActiveTile(t)}
              >
                <span className="tile-icon" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-width section"><HeroSwiper /></section>

      <section className="tint" id="locations">
        <div className="info-grid page-width">
          <div className="big-logo">
            <div className="big-fork" />
            <p className="big-name">Restaurant</p>
            <p>Food &amp; Drinks</p>
          </div>
          <div>
            <p className="kicker">EXPERIENCE FINE DINING AT ITS BEST</p>
            <h2 className="title">Table <span className="blue">Reservation</span></h2>
            <p className="grey">We make dining memorable with our seamless reservation system. Book your perfect table and enjoy an exceptional culinary experience with impeccable service.</p>
            <ul className="checks">
              <li>Easy Online Booking</li>
              <li>Special Occasion Planning</li>
              <li>Instant Confirmation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-width section center">
        <p className="kicker">Blog &amp; News</p>
        <h2 className="title navy">Read Our Latest News</h2>
        <div className="news-grid">
          {[1, 2, 3].map((n) => (
            <div className="news-card" key={n}>
              <div className="news-img" />
              <p className="news-meta">Dining | March 31, 2022</p>
              <p className="news-title">Top 5 Fine Dining Experiences You Must Try</p>
              <p className="news-author">Chef John</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tint" id="menus">
        <div className="info-grid page-width">
          <div>
            <p className="kicker">RESERVE YOUR DINING EXPERIENCE</p>
            <h2 className="title navy">Table Booking</h2>
            <p className="grey">Discover the perfect dining experience at our restaurant. From intimate dinners to special celebrations, we offer seamless reservations that ensure your evening is exactly as you envision. Our attentive staff is ready to accommodate your preferences and dietary requirements.</p>
          </div>
          <div className="team" />
        </div>
      </section>

      <section className="page-width section center" id="services">
        <p className="kicker">Get Your Answer</p>
        <h2 className="title navy">Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-img" />
          <div className="faq-list">
            {faqs.map((q, i) => (
              <div key={q} className="faq-item" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                <b>{q}</b><span>{openFaq === i ? "−" : "+"}</span>
                {openFaq === i && <p>Reach out to our team any time and we will be happy to help.</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppDownload />
    </>
  );
}
