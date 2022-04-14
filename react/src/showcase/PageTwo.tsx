import { Routes } from "../components";

import React from "react";
import ROUTES from "./constants/routes";

const First = () => (
	<div className="section">
		<p>First</p>
	</div>
);
const Second = () => (
	<div className="section">
		<p>Second</p>
	</div>
);
const Firth = () => (
	<div className="section">
		<p>Firth</p>
	</div>
);

const PageTwo = () => {
	return (
		<Routes
			basePath={ROUTES.PAGE_TWO._}
			routes={[
				{
					path: ROUTES.PAGE_TWO.FIRST._,
					element: <First />,
				},
				{
					path: ROUTES.PAGE_TWO.SECOND._,
					element: <Second />,
				},
				{
					path: ROUTES.PAGE_TWO.FIRTH._,
					element: <Firth />,
				},
			]}
			classNameContainer="page page-2"
		/>
	);
};

export default PageTwo;
