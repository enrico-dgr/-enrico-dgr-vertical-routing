import React from "react";
import { useNavigate as useNavigateRouter } from "react-router-dom";

//
import ROUTES from "../../constants/routes";
import useNavigate from "../../hooks/useNavigation/Dev";
import { scroll } from "../../../src/components";

const Dev = () => {
  const navigateRouter = useNavigateRouter();
  const navigate = useNavigate();

  const goToRouter = (to: string) => () => {
    navigateRouter(to);
    scroll(to);
  };

  const goTo = (to: string) => () => navigate(to);

  return (
    <div>
      <button onClick={goToRouter(ROUTES.PAGE.FIRST.get())}>1 - First</button>
      <button onClick={goTo(ROUTES.PAGE.SECOND.get())}>1 - Second</button>
      <button onClick={goToRouter(ROUTES.PAGE.THIRD.get())}>1 - Third</button>
    </div>
  );
};

export default Dev;
