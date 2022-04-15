# Vertical Routing

![Typescript badge](https://img.shields.io/badge/types-Flow%20|%20Typescript-blue)

## React

### Installation

```sh
    yarn add @enrico-dgr/vertical-routing-react
```

or

```sh
    npm i --save @enrico-dgr/vertical-routing-react
```

Tested on:

![Chrome badge](https://img.shields.io/badge/Chrome-Desktop/Mobile-green)
![Edge badge](https://img.shields.io/badge/Edge-Desktop-green)
![Safari badge](https://img.shields.io/badge/Safari-Desktop/Mobile-green)

### Usage

```tsx
// Page.tsx (or .jsx)

import React from "react";

// your components
import First from "path/to/First";
import Second from "path/to/Second";
import Third from "path/to/Third";

// library
import { Routes } from "@enrico-dgr/vertical-routing-react";

const Page = () => {
  return (
    <Routes
      baseAbsolutePath="/page"
      routes={[
        {
          path: "first", // --> /page/first
          element: <First />,
        },
        {
          path: "second", // --> /page/second
          element: <Second />,
        },
        {
          path: "third", // --> /page/third
          element: <Third />,
        },
      ]}
    />
  );
};

export default Page;
```

```tsx
// Nav.tsx (or .jsx)
import React from "react";

import { scroll } from "@enrico-dgr/vertical-routing-react";

const Nav = () => {
  const goToFirst = () => {
    // It finds the first path
    // which includes 'first'
    scroll("first");
    // or scroll('/page/first');
    // for exact match.
  };

  const goToSecond = () => {
    scroll("second");
  };

  const goToThird = () => {
    scroll("third");
  };

  return (
    <nav>
      <button onClick={goToFirst}>First</button>
      <button onClick={goToSecond}>Second</button>
      <button onClick={goToThird}>Third</button>
    </nav>
  );
};

export default Nav;
```

### Usage with react-router-dom

```tsx
// Routing.tsx (or .jsx)

import React from "react";

// your components
import Page from "path/to/Page"; // the component `Page` above

// react-router-dom
import { useRoutes } from "react-router-dom";

const Routing = () =>
  useRoutes([
    {
      path: "/",
      element: <div>...</div>,
    },
    {
      path: "page/*", // wildcard needed
      element: <Page />,
    },
  ]);

export default Routing;
```

```tsx
// Nav.tsx (or .jsx)
import React from "react";

import { scroll } from "@enrico-dgr/vertical-routing-react";

import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const goToFirst = () => {
    scroll("first");
    // common use
    navigate("first");
  };

  const goToSecond = () => {
    scroll("second");
    navigate("second");
  };

  const goToThird = () => {
    scroll("third");
    navigate("third");
  };

  return (
    <nav>
      <button onClick={goToFirst}>First</button>
      <button onClick={goToSecond}>Second</button>
      <button onClick={goToThird}>Third</button>
    </nav>
  );
};

export default Nav;
```

With custom hook

```tsx
// useNavigation.tsx (or .jsx)
// for jsx, remove types
import React from "react";

import { scroll } from "@enrico-dgr/vertical-routing-react";

import {
  NavigateOptions,
  To,
  useNavigate as useNavigateRouter,
} from "react-router-dom";

const useNavigate = () => {
  const navigate = useNavigateRouter();

  return (to: To, options?: NavigateOptions | undefined) => {
    navigate(to, options);

    let path = "";

    if (typeof to === "string") {
      path = to;
    } else {
      path = to.pathname ?? "";
    }

    scroll(path);
  };
};

export default useNavigate;
```

```tsx
// Nav.tsx (or .jsx)
import useNavigate from "path/to/useNavigate";

const Nav = () => {
  const navigate = useNavigate();

  const goToFirst = () => {
    navigate("first");
  };

  const goToSecond = () => {
    navigate("second");
  };

  const goToThird = () => {
    navigate("third");
  };

  return <nav>...</nav>;
};

export default Nav;
```
