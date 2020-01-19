import moment from 'moment';

const INITIAL_STATE = {
  emotion: [],
  transcripts: []
};

const trackingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_INFO':
      return {
        emotions: action.payload.emotions,
        transcript: action.payload.transcript
      };
    default:
      return state;
  }
};

export default trackingReducer;
