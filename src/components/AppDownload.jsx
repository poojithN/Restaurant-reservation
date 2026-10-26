// "Download the Restaurant Booking App" band, shown on every page
export default function AppDownload() {
  return (
    <section className="app-band">
      <div className="phone-box">
        <div className="phone">
          <div className="phone-screen">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <div className="phone-photo" />
          </div>
        </div>
      </div>
      <div className="app-text">
        <h2>Download the<br /><span className="blue">Restaurant Booking</span><br />App</h2>
        <p className="strong">Get the link to download the app</p>
        <div className="sms-row">
          <div className="phone-input"><span>+91</span><input placeholder="Enter phone number" /></div>
          <button type="button" className="primary-btn">Send SMS</button>
        </div>
        <div className="store-row">
          <span className="store">▶ Google Play</span>
          <span className="store"> App Store</span>
        </div>
      </div>
    </section>
  );
}
