import { Map } from 'immutable';

// Types
const INITIAL_MOUNT = 'INITIAL_MOUNT';

// Action Creators
export const initialMount = () => ({ type: INITIAL_MOUNT });

const INITIAL_STATE = Map({
  message: 'initialized',
});

// Reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIAL_MOUNT:
      return state.merge({ message: 'mounted' });
    default:
      return state;
  }
};

// Selectors
