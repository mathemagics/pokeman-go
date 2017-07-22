import { Map } from 'immutable';

// Types
const SECOND_MOUNT = 'SECOND_MOUNT';

// Action Creators
export const secondMount = () => ({ type: SECOND_MOUNT });

const INITIAL_STATE = Map({
  message: 'Second Screen',
});

// Reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SECOND_MOUNT:
      return state.merge({ message: 'second mounted' });
    default:
      return state;
  }
};

// Selectors
