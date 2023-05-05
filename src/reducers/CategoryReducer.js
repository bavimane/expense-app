const initialValue = [];

const categoryReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_CATEGORY": {
      return [...action.payload.name];
    }
    default: {
      return state;
    }
  }
};

export default categoryReducer;
