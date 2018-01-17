const defaultState = ''


export const StyleReducer = (state = defaultState, action) => {
  if (action.type ==='FIND_STYLE') {
    return action.payload;
  }

  return state;
}
