const ROUTES = {
	BASE: "/",
	VERTICAL_ROUTING: {
		ABSOLUTE: "/homepage/*",
		SELF: "homepage",
		get: () => "/homepage/*",
		FIRST: {
			ABSOLUTE: "/homepage/first",
			SELF: "first",
			get: () => "/homepage/first",
		},
		SECOND: {
			ABSOLUTE: "/homepage/second",
			SELF: "second",
			get: () => "/homepage/second",
		},
		FIRTH: {
			ABSOLUTE: "/homepage/firth",
			SELF: "firth",
			get: () => "/homepage/firth",
		},
	},
};

export default ROUTES;
