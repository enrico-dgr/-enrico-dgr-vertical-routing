import { Navigate, useRoutes } from "react-router-dom";
import ROUTES from "./constants/routes";
import React from "react";
import PageDev from "./PageDev";
import PageProd from "./PageProd";
import PageThree from "./PageThree";
import Nav from "./components/nav/Nav";

const Routing = () => (
  <>
    <Nav />
    {useRoutes([
      {
        path: `${ROUTES._}`,
        children: [
          {
            path: ``,
            element: <Navigate to={ROUTES.PAGE.FIRST.get()} />,
          },
          { path: ROUTES.PAGE._ + "/*", element: <PageDev /> },
          { path: ROUTES.PAGE_TWO._ + "/*", element: <PageProd /> },
          { path: ROUTES.PAGE_THREE._ + "/*", element: <PageThree /> },
        ],
      },
    ])}
  </>
);

export default Routing;
