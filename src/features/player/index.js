import React from "react";
import walkSprite from "./player_walk.png";
import handleMovement from "./movement";
import { useSelector } from "react-redux";

function Player() {
  const player = useSelector(state => state.player);
  return (
    <div
      style={{
        position: "absolute",
        top: player.position[1],
        left: player.position[0],
        backgroundImage: `url(${walkSprite})`,
        backgroundPosition: "0 0",
        width: "40px",
        height: "40px"
      }}
    />
  );
}

export default handleMovement(Player);
