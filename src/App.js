import { useState } from "react";
import "./App.css";

export function replaceCameWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [checkbox, setCheckbox] = useState(false);
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        style={{
          backgroundColor: checkbox ? "gray" : buttonColor,
        }}
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
        disabled={checkbox}
      >
        Change to {replaceCameWithSpaces(newButtonColor)}
      </button>
      <input
        type="checkbox"
        id="disabled-button-checkbox"
        checked={checkbox}
        onChange={() => setCheckbox((checked) => !checked)}
      />
      <label htmlFor="disabled-button-checkbox">Disabled button</label>
    </div>
  );
}

export default App;
