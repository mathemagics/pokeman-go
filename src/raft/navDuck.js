import { fromJS } from 'immutable';
import { NavigationActions } from 'react-navigation';

import mainNav from 'nav/mainNav';

const INITIAL_STATE = fromJS(
  mainNav.router.getStateForAction(NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'home' })],
  })),
);

export default (state = INITIAL_STATE, action) => {
  const nextState = state.merge(mainNav.router.getStateForAction(action));
  return nextState || state;
};

