import React from "react";

export const GetApp = () => {
  return (
    <div className="gettheapp">
      <h4>Get The App</h4>
      <div style={{ display: "flex", gap: 10 }}>
        <button className="app_store">App Store</button>
        <button className="play_store">Google Play</button>
      </div>
    </div>
  );
};
