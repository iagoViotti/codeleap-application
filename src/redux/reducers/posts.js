const INITIAL_STATE = {
  posts: [],
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      }
    default:
      return state;
  }
};

export default user;