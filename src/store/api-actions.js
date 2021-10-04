import { ActionCreator } from './action';
import {APIRoute} from '../const';
import {launchAdapter} from './../adapter';

export const fetchLaunchesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LAUNCHES)
    .then(({data}) => dispatch(ActionCreator.loadLaunches(data.results.map((item) => launchAdapter(item)))))
)