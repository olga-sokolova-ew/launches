import { ActionCreator } from './action';
import {APIRoute, AppRoute} from '../const';
import {eventAdapter, launchAdapter, rocketAdapter, currentLaunchAdapter} from './../adapter';

export const fetchLaunchesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LAUNCHES)
    .then(({data}) => dispatch(ActionCreator.loadLaunches(data.results.map((item) => launchAdapter(item)))))
    .catch((err) => dispatch(ActionCreator.launchError(err.message)))
    //.catch((err) => console.log('load error'))
)

export const fetchEventsList = () => (dispatch, _getState, api) => (
    api.get(APIRoute.EVENTS)
      .then(({data}) => dispatch(ActionCreator.loadEvents(data.results.map((item) => eventAdapter(item)))))
      .catch((err) => dispatch(ActionCreator.eventError(err.message)))
      //.catch((err) => console.log('loading error'))
  )

export const fetchCurrentRocket = (id) => (dispatch, _getState, api) => (
  api.get(`cofig/launcher/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadCurrentRocket(data => rocketAdapter(data))))
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.PAGE_NOT_FOUND)))
);

export const fetchCurrentLaunch = (id) => (dispatch, _getState, api) => (
  api.get(`launch/${id}`)
    .then(console.log(`launch/${id}`))
    .then(({data}) => dispatch(ActionCreator.loadCurrentLaunch((currentLaunchAdapter(data)))))
    //.then(({data}) => dispatch(ActionCreator.loadCurrentLaunch(console.log(data))))
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.PAGE_NOT_FOUND)))
);

