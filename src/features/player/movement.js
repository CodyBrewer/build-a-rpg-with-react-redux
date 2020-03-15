import store from "../../config/store";
import { SPRITE_SIZE } from "../../config/constants";

export default function handleMovement(player) {
  function getNewPostion(direction) {
    const oldPos = store.getState().player.position;
    console.log(oldPos);
    switch (direction) {
      case "WEST":
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
      case "EAST":
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
      case "NORTH":
        return [oldPos[0], oldPos[1] - SPRITE_SIZE];
      case "SOUTH":
        return [oldPos[0], oldPos[1] + SPRITE_SIZE];
      default:
        break;
    }
  }

  function dispatchMove(direction) {
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: getNewPostion(direction)
      }
    });
  }

  function handleKeyDown(evt) {
    evt.preventDefault();
    switch (evt.keyCode) {
      case 37:
        return dispatchMove("WEST");
      case 38:
        return dispatchMove("NORTH");
      case 39:
        return dispatchMove("EAST");
      case 40:
        return dispatchMove("SOUTH");
      default:
        console.log(evt.keyCode);
    }
  }

  window.addEventListener("keydown", evt => {
    handleKeyDown(evt);
  });

  return player;
}
