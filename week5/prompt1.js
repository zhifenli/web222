const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your name ? ', function (name) {
  rl.question('Where do you live ? ', function (country) {
    console.log(`${name}, is a citizen of ${country}`);
    rl.close();
  });
});

console.log("main---")
// let name, country;
// rl.question("What is your name ? ", function (name1) {
//   name = name1;
// });

// rl.question("Where do you live ? ", function (country1) {
//   country = country1;
// });

// console.log("name=", name, "country=", country);
// rl.close();

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});
