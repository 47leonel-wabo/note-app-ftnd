import React from "react";

const NotFound = () => {
  return (
    <div className="container h-100">
      <div
        className="d-flex align-items-center justify-content-center h-100"
        style={{ marginTop: "20%" }}
      >
        <div className="d-flex flex-column">
          <h1 className="text align-self-center p-2">Resource Not Found</h1>
          <h2 className="text align-self-center p-2">404</h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
