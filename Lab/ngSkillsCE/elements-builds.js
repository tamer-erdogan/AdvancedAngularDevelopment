const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/nge-skills/runtime.js",
    "./dist/nge-skills/polyfills.js",
    "./dist/nge-skills/scripts.js",
    "./dist/nge-skills/main.js",
  ];

  await fs.ensureDir("elements");
  await concat(files, "elements/nge-skills.js");
  await fs.copyFile("./dist/nge-skills/styles.css", "elements/styles.css");
})();
