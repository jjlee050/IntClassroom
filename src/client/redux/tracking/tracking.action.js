export const setInformation = ({ emotions, transcript }) => ({
  type: 'SET_INFO',
  payload: { emotions: emotions, transcript }
});
