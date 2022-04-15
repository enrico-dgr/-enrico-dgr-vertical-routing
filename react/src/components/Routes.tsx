import React, { Component, CSSProperties } from "react";
import Route, { PropsRoute } from "./Route";

import { animateScroll } from "./animateScroll";
import { addListener, removeListener } from "./scroll";

type Props = {
  baseAbsolutePath: string;
  classNameContainer?: string;
  /**
   * When component mounts, it will try to redirect
   * to the right subpath ( if needed ).
   * This is the time in milliseconds given
   * to the `setInterval` which will try to redirect
   * every `onMountScrollDelay` ms.
   *
   * **Default :** `300ms`
   */
  onMountScrollDelay?: number;
  routes: PropsRoute[];
  styleContainer?: CSSProperties;
};

type State = {
  absolutePath: string;
  mappedRoutes: { absolutePath: string; div: HTMLDivElement }[];
};

class Routes extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.onMountScrollDelay = this.props.onMountScrollDelay ?? 300;
    this.refScrollableContainer = React.createRef<HTMLDivElement>();

    this.state = {
      absolutePath: this.props.baseAbsolutePath,
      mappedRoutes: [],
    };
  }

  onMountScrollDelay;
  refScrollableContainer;

  /**
   *
   * @param pathname the string method `includes` is used
   * to find the first matching path
   */
  scrollToPathname = (pathname: string) => {
    // find element to scroll to
    const div = this.state.mappedRoutes.find((r) =>
      r.absolutePath.includes(pathname)
    )?.div;

    if (!!div && !!this.refScrollableContainer.current) {
      animateScroll({
        targetElement: div,
        containerElement: this.refScrollableContainer.current,
        duration: 1000,
      });

      return {
        noScrolling: false,
      };
    }

    return {
      noScrolling: true,
    };
  };

  componentDidMount = () => {
    addListener(this.scrollToPathname);

    // validate base path
    if (/^\//.test(this.props.baseAbsolutePath) === false) {
      console.error(
        `Base path "${this.props.baseAbsolutePath}" is not absolute.\n` +
          `This can lead to 'not-scrolled' navigations.`
      );
    }

    // sync route at first page loading
    let done = false;

    const interval = setInterval(() => {
      if (
        !done &&
        this.state.absolutePath !== location.pathname &&
        this.scrollToPathname(location.pathname).noScrolling === false
      ) {
        done = true;
        clearInterval(interval);
        this.setState({ absolutePath: location.pathname });
      }
    }, this.onMountScrollDelay);
  };

  shouldComponentUpdate = (nextProps: Props, _nextState: State) => {
    for (const key in nextProps) {
      if (Object.prototype.hasOwnProperty.call(nextProps, key)) {
        const keyTyped = key as keyof Props;
        if (nextProps[keyTyped] !== this.props[keyTyped]) return true;
      }
    }

    return false;
  };

  addRouteToState = (path: string) => (div: HTMLDivElement) => {
    let absolutePath = `${this.props.baseAbsolutePath}/${path}`;

    if (/^\//.test(this.props.baseAbsolutePath) === false) {
      absolutePath = "/" + absolutePath;
    }

    const newRoute = {
      absolutePath,
      div,
    };

    this.setState((ps) => ({
      mappedRoutes: [...ps.mappedRoutes, newRoute],
    }));
  };

  componentWillUnmount = () => {
    removeListener(this.scrollToPathname);
  };

  render() {
    return (
      <div
        className={this.props.classNameContainer}
        ref={this.refScrollableContainer}
        style={this.props.styleContainer}
      >
        <div style={styleList}>{this.props.routes.map(this.mapRoutes)}</div>
      </div>
    );
  }

  mapRoutes = (route: PropsRoute, i: number) => (
    <Route
      key={this.props.baseAbsolutePath + i + route.path}
      {...route}
      onComponentDidMount={this.addRouteToState(route.path)}
    />
  );
}

const styleList: React.HTMLAttributes<HTMLDivElement>["style"] = {
  display: "flex",
  flexDirection: "column",
  height: "min-content",
};

export default Routes;
