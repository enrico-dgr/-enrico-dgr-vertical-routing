import React from "react";
import { useNavigate } from "react-router-dom";

//
import ROUTES from "../../constants/routes";
import { scroll } from "../../../src/components";
import Dev from "./Dev";
import Prod from "./Prod";

const Nav = () => {
  const navigate = useNavigate();

  const goTo = (to: string) => () => {
    navigate(to);
    scroll(to);
  };

  return (
    <nav>
      <Dev />
      <Prod />
      <div>
        <button onClick={goTo(ROUTES.PAGE_THREE.get())}>Page Three</button>
      </div>
    </nav>
  );
};

export default Nav;
