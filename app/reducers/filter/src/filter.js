const defaultState = ''


export const FilterReducer = (state = defaultState, action) => {
  if (action.type === 'FIND') {
    return action.payload;
  }
    return state;
};
