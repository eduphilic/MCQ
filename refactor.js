// @ts-check
const path = require("path");
const fs = require("fs");
const readline = require("readline");

const rootDir = path.join(__dirname, "src/prototype");

const moduleNames = fs
  .readdirSync(rootDir)
  .filter(node => fs.statSync(path.join(rootDir, node)).isDirectory());
const regexes = moduleNames.map(
  moduleName => new RegExp(`from "(${moduleName})(/.*)*"`),
);

/**
 * @param {string} directory
 * @returns {string[]}
 */
function walk(directory) {
  const nodes = fs.readdirSync(directory);
  const nodePaths = nodes.map(filename => path.join(directory, filename));
  const files = /** @type {string[]} */ ([]);
  const directories = nodePaths.filter(nodePath => {
    if (!fs.statSync(nodePath).isDirectory()) {
      if (/\.tsx?$/.test(nodePath)) {
        files.push(nodePath);
      }
      return false;
    }

    return true;
  });

  return directories.reduce((accumulator, directoryPath) => {
    return [...accumulator, ...walk(directoryPath)];
  }, files);
}

/**
 * @param {string} filePath
 * @param {string} moduleName
 */
function relativePath(filePath, moduleName) {
  const fileDirectory = path.resolve(
    filePath.replace(new RegExp(`${path.basename(filePath)}$`), ""),
  );

  const relative = path
    .relative(fileDirectory, path.join(rootDir, moduleName))
    .split(path.sep)
    .join(path.posix.sep);
  return relative.startsWith(".") ? relative : `./${relative}`;
}

/**
 * @param {string} filePath
 */
async function processFile(filePath) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const lines = fileContents.split("\n");
  const lineMutations = /** @type {Array<string | null>} */ ([]);
  let mutated = false;

  // tslint:disable-next-line: no-console
  console.log(`> ${filePath}`);

  lines.forEach(line => {
    const moduleRegexIndex = regexes.findIndex(r => r.test(line));
    if (moduleRegexIndex === -1) {
      lineMutations.push(null);
      return;
    }

    lineMutations.push(
      line.replace(
        regexes[moduleRegexIndex],
        `from "${relativePath(filePath, moduleNames[moduleRegexIndex])}$2"`,
      ),
    );
    mutated = true;
  });

  if (!mutated) {
    return;
  }

  /** @type {string[]} */
  const finalLines = [];

  lineMutations.forEach((lineMutation, index) => {
    if (!lineMutation) {
      finalLines.push(lines[index]);
      return;
    }

    finalLines.push(lineMutation);
    /* tslint:disable-next-line:no-console */
    console.log(`Line #${index}:`);
    /* tslint:disable-next-line:no-console */
    console.log(`>>> ${lines[index]}`);
    /* tslint:disable-next-line:no-console */
    console.log(`<<< ${lineMutation}\n`);
  });

  await prompt();

  fs.writeFileSync(filePath, finalLines.join("\n"), "utf8");
}

/** @returns {Promise<void>} */
function prompt() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question("Proceed? [y/N]", answer => {
      if (answer.toLowerCase() !== "y") {
        process.exit(0);
      }

      /* tslint:disable-next-line:no-console */
      console.log();
      rl.close();
      resolve();
    });
  });
}

async function main() {
  const queue = walk(rootDir);

  for (const queueItem of queue) {
    await processFile(queueItem);
  }
}

main();
