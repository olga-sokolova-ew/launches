import {Switch, Route, BrowserRouter} from 'react-router-dom';
import NotFound from '../pages/not-found/not-found';
import Main from '../pages/main/main';
import RockedPage from '../pages/rocketPage/rocketPage';
import LaunchPage from '../pages/launchPage/launchPage';
import {AppRoute} from '../../const';
import { connect } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

function App() {

  
    
  
  
  return (
    <BrowserRouter>
    <CssBaseline />
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={AppRoute.ROCKET}>
          <RockedPage />
        </Route>
       
        <Route exact path={AppRoute.LAUNCH}>
          <LaunchPage />
        </Route>
      
        {/*<Route exact path={AppRoute.EVENT}>
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
