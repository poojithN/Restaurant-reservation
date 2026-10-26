import { useState } from "react";
import { SearchIcon } from "./Icons.jsx";

// A simple custom dropdown.
// The wrapper div gets the id ("state" or "city") that the tests look for.
export default function Dropdown({ id, placeholder, options, value, onChange, disabled }) {
  const [open, setOpen] = useState(false);

  function handleSelect(option) {
    onChange(option);
    setOpen(false);
  }

  return (
    <div id={id} className={"dropdown" + (disabled ? " disabled" : "")}>
      <button
        type="button"
        className="dropdown-button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
      >
        <SearchIcon color="#6b7a90" />
        <span className={value ? "" : "placeholder"}>{value || placeholder}</span>
        <span className="caret">▾</span>
      </button>

      {open && !disabled && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
