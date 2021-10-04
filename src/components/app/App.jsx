import {Switch, Route, BrowserRouter} from 'react-router-dom';
import NotFound from '../pages/not-found/not-found';
import Main from '../pages/main/main';
import {AppRoute} from '../../const';
import { connect } from 'react-redux';
//import './App.css';

function App({isLaunchesLoaded}) {
  
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        {/*<Route exact path={AppRoute.LAUNCH}>
          <Launch />
        </Route>
      
        <Route exact path={AppRoute.EVENT}>
          <Event />
    </Route>*/}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  isLaunchesLoaded: state.isLaunchesLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
