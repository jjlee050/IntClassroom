import { createSelector } from 'reselect';

const selectTracking = state => state.tracking;

export const selectEmotions = createSelector(
    [selectTracking],
    tracking => tracking.emotions
)

export const selectTranscript = createSelector(
    [selectTracking],
    tracking =>  tracking.transcript
)
