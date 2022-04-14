const ROUTES = {
	_: "/",
	PAGE: {
		_: "/page/*",
		get: () => "/page",
		FIRST: {
			_: "/page/first",
			get: () => "/page/first",
		},
		SECOND: {
			_: "/page/second",
			get: () => "/page/second",
		},
		FIRTH: {
			_: "/page/firth",
			get: () => "/page/firth",
		},
	},
	PAGE_TWO: {
		_: "/page-two/*",
		get: () => "/page-two",
		FIRST: {
			_: "/page-two/first",
			get: () => "/page-two/first",
		},
		SECOND: {
			_: "/page-two/second",
			get: () => "/page-two/second",
		},
		FIRTH: {
			_: "/page-two/firth",
			get: () => "/page-two/firth",
		},
	},
	PAGE_THREE: {
		_: "/page-three",
		get: () => "/page-three",
	},
};

export default ROUTES;
