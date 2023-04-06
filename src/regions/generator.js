// read data json with fs
const fs = require("fs");
const path = require("path");
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json")));

// read template file
const template = fs.readFileSync(
  path.join(__dirname, "separated/index.ts.template"),
);

// iterate over data
for (const [key, value] of Object.entries(data)) {
  // create folder if not exists
  if (!fs.existsSync(path.join(__dirname + `/separated/${key}`))) {
    fs.mkdirSync(path.join(__dirname + `/separated/${key}`));
  }

  // generate new json file named after the key and dump the value
  fs.writeFileSync(
    path.join(__dirname + `/separated/${key}`, `data.json`),
    JSON.stringify(value),
  );

  // generate new index.ts file with the template
  fs.writeFileSync(
    path.join(__dirname + `/separated/${key}`, `index.ts`),
    template,
  );
}
