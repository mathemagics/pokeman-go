import { Map } from 'immutable';

// Types
const SET_IMAGE = 'SET_IMAGE';

// Action Creators
export const setImage = image => (dispatch) => {
  dispatch({
    type: SET_IMAGE,
    payload: image,
  });
};

const INITIAL_STATE = Map({
  image: null,
});

// Reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IMAGE:
      return state.merge({ image: action.payload });
    default:
      return state;
  }
};

// Selectors

/*
fetch('__FILE_API_ENDPOINT__', {
  method: 'POST',
  body: data
}).then(response => {
  return response.json()
}).then(image => {
  this.setState({
    imageId: image.id,
    imageUrl: image.url,
  })
})
*/
