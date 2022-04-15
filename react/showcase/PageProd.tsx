import React from "react";

//
import ROUTES from "./constants/routes";
import { Routes } from "../dist";

const First = () => (
  <div className="section">
    <p>First</p>
  </div>
);
const Second = () => (
  <div className="section">
    <p>Second</p>
  </div>
);
const Firth = () => (
  <div className="section">
    <p>Firth</p>
  </div>
);

const PageTwo = () => {
  return (
    <Routes
      baseAbsolutePath={ROUTES.PAGE_TWO.get()}
      routes={[
        {
          path: ROUTES.PAGE_TWO.FIRST._,
          element: <First />,
        },
        {
          path: ROUTES.PAGE_TWO.SECOND._,
          element: <Second />,
        },
        {
          path: ROUTES.PAGE_TWO.THIRD._,
          element: <Firth />,
        },
      ]}
      classNameContainer="page page-2"
    />
  );
};

export default PageTwo;
