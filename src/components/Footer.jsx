import { Logo } from "./Icons.jsx";

const columns = [
  ["About Our Restaurant", "Menu", "Photo Gallery", "Contact Us", "Terms of Service"],
  ["Reservations", "Special Events", "Private Dining", "Customer Support", "Gift Cards"],
  ["Our Cuisine", "Wine List", "Chef's Special", "Catering Services", "Loyalty Program"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo-light"><Logo /></div>
          <div className="socials">
            <span>f</span><span>t</span><span>▶</span><span>p</span>
          </div>
        </div>
        <div className="footer-cols">
          {columns.map((col, i) => (
            <ul key={i}>
              {col.map((item) => <li key={item}>› {item}</li>)}
            </ul>
          ))}
        </div>
      </div>
      <p className="copyright">Copyright ©2025 FineDining.com. All Rights Reserved</p>
    </footer>
  );
}
