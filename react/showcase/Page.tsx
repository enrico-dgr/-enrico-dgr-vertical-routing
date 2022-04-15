import React from "react";
import { Routes } from "../src/components";
import ROUTES from "./constants/routes";

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
const Third = () => (
  <div className="section">
    <p>Third</p>
  </div>
);

const Page = () => {
  return (
    <Routes
      baseAbsolutePath={ROUTES.PAGE.get()}
      routes={[
        {
          path: ROUTES.PAGE.FIRST._,
          element: <First />,
        },
        {
          path: ROUTES.PAGE.SECOND._,
          element: <Second />,
        },
        {
          path: ROUTES.PAGE.THIRD._,
          element: <Third />,
        },
      ]}
      classNameContainer="page page-1"
    />
  );
};

export default Page;
