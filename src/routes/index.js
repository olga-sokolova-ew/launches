import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { Box } from "@material-ui/core";
import { commonRoutes } from "./commonRoutes";
//import { privateRoutes } from "./privateRoutes";
//import PrivateRoute from "hocs/PrivateRoute";

const Routes = () => {
  return (
    <Suspense
      fallback={
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={"100vh"}
        >
          <Loader />
        </Box>
      }
    >
      <Switch>
        {[
          ...commonRoutes,
        ]?.map((route, index) => {
          
          return <Route
            {...route}
            key={`r_${index}_${route.path}`}
          />;
        })}
      </Switch>
    </Suspense>
  );
};

export default Routes;
