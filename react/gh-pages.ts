import ghPages from "gh-pages";

const pathBuild = "showcase/build";

const callback = (err: any) => {
  if (!!err) {
    console.error(err);
    return;
  }

  console.log(`Dir "${pathBuild}" published to GitHub Pages`);
};

ghPages.publish(pathBuild, callback);
