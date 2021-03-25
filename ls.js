const chalk = require("chalk");
const fs = require("fs");

//fs.readdirSync(path);

// check the cmd line
if (process.argv.length !== 3) {
  console.log(chalk.yellow("usage: node test.js directory"));
  process.exit(1);
}

// check if the directory exists
if (!fs.existsSync(process.argv[2])) {
  console.log(chalk.red(`Error: "${process.argv[2]}" does not exist`));
  process.exit(1);
}

// check if it's a directory or not
const stats = fs.statSync(process.argv[2]);
if (!stats.isDirectory()) {
  console.log(chalk.red(`Error: "${process.argv[2]}" is not a directory`));
  process.exit(1);
}

let directory = fs.readdirSync(process.argv[2]);

directory.forEach((elem) => {
  console.log(chalk.green(elem));
});

/*
OUTPUT:

TEST 1 :
➜  exo-fs-api git:(main) ✗ node test.js echo.js
Error: "echo.js" is not a directory (en rouge)

TEST 2 :
➜  exo-fs-api git:(main) ✗ node test.js directory
Error: "directory" does not exist (en rouge)

TEST 3 :
➜  exo-fs-api git:(main) ✗ node test.js
usage: node test.js directory (en jaune)

TEST 4 :
➜  exo-fs-api git:(main) ✗ node test.js myDirectory
fichiertest1.txt
fichiertest2.txt (en vert)

*/
