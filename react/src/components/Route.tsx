import React, { Component, ReactNode } from "react";

export type PropsRoute = {
	onComponentDidMount?: (div: HTMLDivElement) => void;
	element: ReactNode;
	path: string;
};

class Route extends Component<PropsRoute, {}> {
	constructor(props: PropsRoute) {
		super(props);

		this.onComponentDidMount =
			this.props.onComponentDidMount ?? (() => undefined);
		this.myRef = React.createRef<HTMLDivElement>();
		this.state = {};
	}

	onComponentDidMount;
	myRef;

	componentDidMount = () => {
		if (!!this.myRef.current) {
			this.onComponentDidMount(this.myRef.current);
		}
	};

	render() {
		return <div ref={this.myRef}>{this.props.element}</div>;
	}
}

export default Route;
