import React, { useState } from "react";
import CopyToClipboardButton from "./CopyToClipBoard";
import "bootstrap/dist/css/bootstrap.min.css";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  const cardStyle = {
    fontFamily: "Roboto, sans-serif", // Use Google Fonts (Roboto)
    backgroundColor: "#d5bdaf",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    color: color,
    border: "2px solid #824c32", // Add border
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div
      style={{ backgroundColor: "#d5bdaf", height: "100vh", ...containerStyle }}
    >
      <div style={cardStyle}>
        <h1 className="mb-4">Color Picker</h1>
        <p className="mb-3">Selected Color: {color}</p>
        <label className="mr-2">Select a Color: </label>
        <input
          type="color"
          onChange={(e) => {
            setColor(e.target.value);
          }}
          className="mr-2"
        />
        <CopyToClipboardButton textToCopy={color} />
      </div>
    </div>
  );
}

export default ColorPicker;
