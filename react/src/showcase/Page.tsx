import { Routes } from "../components";

import React from "react";

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
			basePath="page"
			routes={[
				{
					path: "first",
					element: <First />,
				},
				{
					path: "second",
					element: <Second />,
				},
				{
					path: "firth",
					element: <Firth />,
				},
			]}
			classNameContainer="page page-1"
		/>
	);
};

export default Page;
