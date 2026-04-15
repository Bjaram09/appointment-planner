import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ data }) => {
  return (
    <div className="tile-list">
      {data.map((item, index) => {
        const { name, ...rest } = item;
        return <Tile key={index} name={name} description={rest} />;
      })}
    </div>
  );
};
