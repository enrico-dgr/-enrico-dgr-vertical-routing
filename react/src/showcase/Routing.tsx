import { Navigate, useRoutes } from "react-router-dom";
import ROUTES from "./constants/routes";
import React from "react";
import First from "./screens/first/First";

const Routing = () =>
	useRoutes([
		{
			path: `${ROUTES.BASE}`,
			element: <Navigate to={ROUTES.VERTICAL_ROUTING.get()} />,
		},
		{ path: ROUTES.VERTICAL_ROUTING.ABSOLUTE, element: <First /> },
	]);

export default Routing;
