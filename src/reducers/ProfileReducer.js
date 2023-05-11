const initialState = {};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default userProfileReducer;
