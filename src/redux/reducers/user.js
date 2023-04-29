const INITIAL_STATE = {
  username: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
      default:
        return state;
  }
};

export default user;