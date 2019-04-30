import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import LandingPageRouter from '../pages/landing_page/routers/Landing_page_router';

const Root_router = () => {
   return (
      <Router>
         <Switch>
            <LandingPageRouter />
         </Switch>
      </Router>
   )
}

export default Root_router
