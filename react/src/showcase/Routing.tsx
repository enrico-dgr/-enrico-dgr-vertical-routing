import { Navigate, useNavigate, useRoutes } from "react-router-dom";
import ROUTES from "./constants/routes";
import React from "react";
import Page from "./Page";
import PageTwo from "./PageTwo";
import { scroll } from "../components";
import PageThree from "./PageThree";

const Nav = () => {
	const navigate = useNavigate();

	const goTo = (to: string) => () => {
		navigate(to);
		scroll(to);
	};

	return (
		<nav>
			<div>
				<button onClick={goTo(ROUTES.PAGE.FIRST.get())}>1 - First</button>
				<button onClick={goTo(ROUTES.PAGE.SECOND.get())}>1 - Second</button>
				<button onClick={goTo(ROUTES.PAGE.FIRTH.get())}>1 - Firth</button>
			</div>
			<div>
				<button onClick={goTo(ROUTES.PAGE_TWO.FIRST.get())}>2 - First</button>
				<button onClick={goTo(ROUTES.PAGE_TWO.SECOND.get())}>2 - Second</button>
				<button onClick={goTo(ROUTES.PAGE_TWO.FIRTH.get())}>2 - Firth</button>
			</div>
			<div>
				<button onClick={goTo(ROUTES.PAGE_THREE.get())}>Page Three</button>
			</div>
		</nav>
	);
};

const Routing = () => (
	<>
		<Nav />
		{useRoutes([
			{
				path: `${ROUTES._}`,
				element: <Navigate to={ROUTES.PAGE.get()} />,
			},
			{ path: ROUTES.PAGE._, element: <Page /> },
			{ path: ROUTES.PAGE_TWO._, element: <PageTwo /> },
			{ path: ROUTES.PAGE_THREE._, element: <PageThree /> },
		])}
	</>
);

export default Routing;
