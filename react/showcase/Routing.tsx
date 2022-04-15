import {
  Navigate,
  NavigateOptions,
  To,
  useNavigate,
  useRoutes,
} from "react-router-dom";
import ROUTES from "./constants/routes";
import React from "react";
import Page from "./Page";
import PageTwo from "./PageTwo";
import { scroll } from "../src/components";
import PageThree from "./PageThree";

const useNavigateCustom = () => {
  const navigate = useNavigate();

  return (to: To, options?: NavigateOptions | undefined) => {
    navigate(to, options);

    let path = "";

    if (typeof to === "string") {
      path = to;
    } else {
      path = to.pathname ?? "";
    }

    scroll(path);
  };
};

const Nav = () => {
  const navigate = useNavigate();
  const navigateCustom = useNavigateCustom();

  const goTo = (to: string) => () => {
    navigate(to);
    scroll(to);
  };

  const goToCustom = (to: string) => () => navigateCustom(to);

  return (
    <nav>
      <div>
        <button onClick={goTo(ROUTES.PAGE.FIRST.get())}>1 - First</button>
        <button onClick={goTo(ROUTES.PAGE.SECOND.get())}>1 - Second</button>
        <button onClick={goTo(ROUTES.PAGE.THIRD.get())}>1 - Third</button>
      </div>
      <div>
        <button onClick={goToCustom(ROUTES.PAGE_TWO.FIRST.get())}>
          2 - First
        </button>
        <button onClick={goToCustom(ROUTES.PAGE_TWO.SECOND.get())}>
          2 - Second
        </button>
        <button onClick={goToCustom(ROUTES.PAGE_TWO.THIRD.get())}>
          2 - Third
        </button>
      </div>
      <div>
        <button onClick={goTo(ROUTES.PAGE_THREE.get())}>Page Three</button>
      </div>
    </nav>
  );
};

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
          { path: ROUTES.PAGE._ + "/*", element: <Page /> },
          { path: ROUTES.PAGE_TWO._ + "/*", element: <PageTwo /> },
          { path: ROUTES.PAGE_THREE._ + "/*", element: <PageThree /> },
        ],
      },
    ])}
  </>
);

export default Routing;
