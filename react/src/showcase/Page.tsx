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

const Page = () => {
	return (
		<Routes
			basePath={ROUTES.PAGE._}
			routes={[
				{
					path: ROUTES.PAGE.FIRST._,
					element: <First />,
				},
				{
					path: ROUTES.PAGE.SECOND._,
					element: <Second />,
				},
				{
					path: ROUTES.PAGE.FIRTH._,
					element: <Firth />,
				},
			]}
			classNameContainer="page page-1"
		/>
	);
};

export default Page;
