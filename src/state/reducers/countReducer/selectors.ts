import { createSelector } from '@reduxjs/toolkit';
import services from '.';

export const getCountState = (state: any) => state[services.name];
export const getCount = createSelector(getCountState, (state) => state.count);
