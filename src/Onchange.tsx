import React, { useState } from "react";

function Onchange() {
  let [name, setName] = useState("Guest");
  return (
    <>
      <p>Name: {name}</p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </>
  );
}
export default Onchange;
