import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-card">
      <p className="tile-title">{name}</p>
      {Object.entries(description).map(([key, value], index) => {
        const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
        return (
          <p key={index} className="tile-detail">
            <span className="tile-key">{formattedKey}:</span> {value}
          </p>
        );
      })}
    </div>
  );
};
