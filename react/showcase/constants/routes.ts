const ROUTES = {
  _: "/",
  PAGE: {
    _: "page",
    get: () => "/page",
    FIRST: {
      _: "first",
      get: () => "/page/first",
    },
    SECOND: {
      _: "second",
      get: () => "/page/second",
    },
    THIRD: {
      _: "third",
      get: () => "/page/third",
    },
  },
  PAGE_TWO: {
    _: "page-two",
    get: () => "/page-two",
    FIRST: {
      _: "first",
      get: () => "/page-two/first",
    },
    SECOND: {
      _: "second",
      get: () => "/page-two/second",
    },
    THIRD: {
      _: "third",
      get: () => "/page-two/third",
    },
  },
  PAGE_THREE: {
    _: "page-three",
    get: () => "/page-three",
  },
};

export default ROUTES;
