import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function StateTut() {
  const [count, setCount] = useState(0);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 border rounded p-4">
      <div className="text-center">
        <p className="h3 mb-4">Current Value: {count}</p>
        <Button
          variant="primary"
          className="mr-2"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </Button>
        <Button variant="danger" className="mr-2" onClick={() => setCount(0)}>
          Reset
        </Button>
        <Button variant="secondary" onClick={() => setCount(count - 1)}>
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default StateTut;
