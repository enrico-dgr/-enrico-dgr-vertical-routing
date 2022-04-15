# Vertical Routing

![Typescript badge](https://img.shields.io/badge/types-Flow%20|%20Typescript-blue)

## React

### Installation

```bash
    yarn add @enrico-dgr/vertical-routing-react
```

or

```bash
    npm i --save @enrico-dgr/vertical-routing-react
```

Tested on:

![Chrome badge](https://img.shields.io/badge/Chrome-Desktop/Mobile-green)
![Edge badge](https://img.shields.io/badge/Edge-Desktop-green)
![Safari badge](https://img.shields.io/badge/Safari-Desktop/Mobile-green)

### Usage

```tsx
import React from "react";

// your components
import First from "path/to/First";
import Second from "path/to/Second";
import Firth from "path/to/Firth";

// library
import { Routes } from "@enrico-dgr/vertical-routing-react";

const Page = () => {
  return (
    <Routes
      basePath="page"
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
          path: "firth", // --> /page/firth
          element: <Firth />,
        },
      ]}
    />
  );
};

export default Page;
```
