const theme = (state = 'main', action = {}) => {
  switch (action.type) {
    case 'CHANGE':
      state = action.color
      return state
    default: return state
  }
}

export default theme