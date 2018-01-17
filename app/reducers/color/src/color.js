const defaultState = ''


export const ColorRedReducer = (state = defaultState, action) => {
  if (action.type ==='FIND_RED') {
    return action.payload;
  }

  return state;
}

export const ColorBlueReducer = (state = defaultState, action) => {
  if (action.type ==='FIND_BLUE') {
    return action.payload;
  }

  return state;
}

export const ColorGreenReducer = (state = defaultState, action) => {
  if (action.type ==='FIND_GREEN') {
    return action.payload;
  }

  return state;
}

export const ColorYellowReducer = (state = defaultState, action) => {
  if (action.type ==='FIND_YELLOW') {
    return action.payload;
  }

  return state;
}

export const ColorBrownReducer = (state = defaultState, action) => {
  if (action.type ==='FIND_BROWN') {
    return action.payload;
  }

  return state;
}
