import getDestinations from '../../helpers/getDestinations';
import destroyDestination from '../../helpers/destroyDestination';

// Actions
const LOAD = 'vacations-booking-front-end/destinations/LOAD';
const DELETE = 'vacations-booking-front-end/destinations/DELETE';
const POST = 'vacations-booking-front-end/destinations/POST';
const initialState = [];

// Action creators
const deleteDestination = (payload) => ({
  type: DELETE,
  payload,
});

const deleteThunkDestination = (destinationId) => async (dispatch) => {
  const response = await destroyDestination();
  if (response.status === 'Success!') {
    dispatch(deleteDestination(destinationId));
  }
};

const loadDestinations = (payload) => ({
  type: LOAD,
  payload,
});

export const postDestinations = (payload = '') => ({
  type: POST,
  payload,
});

const loadDestinationsThunk = () => async (dispatch) => {
  const data = await getDestinations();
  if (data) {
    dispatch(loadDestinations(data));
  }
};

// reducer
const destinationsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD:
      return {
        ...state,
        destinations: payload,
      };
    case DELETE:
      return {
        ...state,
        ...state.destinations.filter((destination) => destination.id !== action.payload),
      };
    case POST:
      return {
        ...state,
        action,
      };

    default:
      return state;
  }
};

export { destinationsReducer, loadDestinationsThunk, deleteThunkDestination };
