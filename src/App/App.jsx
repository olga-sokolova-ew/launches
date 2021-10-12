import {Switch, Route, BrowserRouter} from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Main from '../pages/Main/Main';
import RockedPage from '../pages/RocketPage/RocketPage';
import LaunchPage from '../pages/LaunchPage/LaunchPage';
import {AppRoute} from '../utils/const';
import { connect } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Routes from '../routes';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <CssBaseline />
      <Routes />
     
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  isLaunchesLoaded: state.isLaunchesLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
