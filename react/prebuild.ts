import fs from "fs";
import path from "path";
import prettier from "prettier";
import packageJson from "./package.json";

const dist = path.resolve(__dirname, "dist");

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist);
}

if (typeof packageJson === "object") {
  // extract data from package.json
  const { scripts, devDependencies, peerDependencies, ...dataExtracted } =
    packageJson;

  // stringify
  const dataStringified = JSON.stringify(dataExtracted);

  // format before create file
  const dataFormatted = prettier.format(dataStringified, {
    parser: "json",
  });

  // create file
  const pathPackageJsonDest = path.join(dist, "package.json");
  fs.writeFileSync(pathPackageJsonDest, dataFormatted);
}

const pathReadmeSrc = path.join(__dirname, "README.md");
const pathReadmeDest = path.join(dist, "README.md");

fs.copyFileSync(pathReadmeSrc, pathReadmeDest);
