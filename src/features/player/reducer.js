const initialState = {
  position: [0, 0]
};

const playerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "MOVE_PLAYER":
      return {
        ...payload
      };
    default:
      return state;
  }
};

export default playerReducer;
