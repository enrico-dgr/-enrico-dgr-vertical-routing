const ROUTES = {
  _: "/",
  PAGE: {
    _: "page",
    get: () => "/page",
    FIRST: {
      _: "first",
      get: () => ROUTES.PAGE.get() + "/first",
    },
    SECOND: {
      _: "second",
      get: () => ROUTES.PAGE.get() + "/second",
    },
    THIRD: {
      _: "third",
      get: () => ROUTES.PAGE.get() + "/third",
    },
  },
  PAGE_TWO: {
    _: "page-two",
    get: () => "/page-two",
    FIRST: {
      _: "first",
      get: () => ROUTES.PAGE_TWO.get() + "/first",
    },
    SECOND: {
      _: "second",
      get: () => ROUTES.PAGE_TWO.get() + "/second",
    },
    THIRD: {
      _: "third",
      get: () => ROUTES.PAGE_TWO.get() + "/third",
    },
  },
  PAGE_THREE: {
    _: "page-three",
    get: () => "/page-three",
  },
};

export default ROUTES;
