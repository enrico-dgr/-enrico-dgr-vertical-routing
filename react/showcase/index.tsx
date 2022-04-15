import React from "react";
import * as ReactDOM from "react-dom";

// routing
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";

let domContainer = document.getElementById("react");
if (domContainer === null) throw new Error("dom container is null.");

ReactDOM.render(
	<BrowserRouter>
		<Routing />
	</BrowserRouter>,
	domContainer
);
