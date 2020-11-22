// An object that expresses what the data layer looks like data will live here
export const initialState = {
  term: null,
};
//  This is used when the data layer changes changes or sets the search term
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

// state is data layer and action is what it is changed to the reducer will listen to all actions returns to initial state if the action is unclear
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_SEARCH_TERM":
      //   returns current state then change term to action term
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};

export default reducer;
