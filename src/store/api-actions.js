import { ActionCreator } from './action';
import {APIRoute} from '../const';
import {eventAdapter, launchAdapter} from './../adapter';

export const fetchLaunchesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LAUNCHES)
    .then(({data}) => dispatch(ActionCreator.loadLaunches(data.results.map((item) => launchAdapter(item)))))
)

export const fetchEventsList = () => (dispatch, _getState, api) => (
    api.get(APIRoute.EVENTS)
      .then(({data}) => dispatch(ActionCreator.loadEvents(data.results.map((item) => eventAdapter(item)))))
  )