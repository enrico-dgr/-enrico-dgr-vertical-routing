import {
  NavigateOptions,
  To,
  useNavigate as useNavigateRouter,
} from "react-router-dom";

//
import { scroll } from "../../../dist";

const useNavigate = () => {
  const navigateRouter = useNavigateRouter();

  return (to: To, options?: NavigateOptions | undefined) => {
    let path = "";

    if (typeof to === "string") {
      path = to;
    } else {
      path = to.pathname ?? "";
    }

    navigateRouter(to, options);
    scroll(path);
  };
};

export default useNavigate;
