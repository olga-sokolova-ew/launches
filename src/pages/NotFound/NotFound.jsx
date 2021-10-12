import React from 'react';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../utils/const';

function NotFound() {
  return (
    <section  style={{height: '100vh'}}>
        <h1 >Page not found</h1>
        <Link to={AppRoute.ROOT} >Link to Main Page</Link>
    </section>
  );
}

export default NotFound;