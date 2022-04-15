import React from "react";
import { useNavigate as useNavigateRouter } from "react-router-dom";

//
import ROUTES from "../../constants/routes";
import useNavigate from "../../hooks/useNavigation/Prod";
import { scroll } from "../../../dist";

const Prod = () => {
  const navigateRouter = useNavigateRouter();
  const navigate = useNavigate();

  const goToRouter = (to: string) => () => {
    navigateRouter(to);
    scroll(to);
  };

  const goTo = (to: string) => () => navigate(to);

  return (
    <div>
      <button onClick={goToRouter(ROUTES.PAGE_TWO.FIRST.get())}>
        2 - First
      </button>
      <button onClick={goTo(ROUTES.PAGE_TWO.SECOND.get())}>2 - Second</button>
      <button onClick={goToRouter(ROUTES.PAGE_TWO.THIRD.get())}>
        2 - Third
      </button>
    </div>
  );
};

export default Prod;
