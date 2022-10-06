const prompt = require("prompt");

prompt.start();

function onErr(err) {
  console.log(err);
  return 1;
}

prompt.get(["username"], function (err, result) {
  if (err) {
    return onErr(err);
  }
  console.log("Command-line input received:");
  console.log("  Username: " + result.username);
});

