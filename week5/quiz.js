console.log("Hello!");

function checkPassword(passward) {
  if (passward.length < 8 || passward.length > 32) {
    return false;
  }

  if (!/[A-Z]/g.test(passward)) {
    return false;
  }

  if (!/\d/g.test(passward)) {
    return false;
  }

  if (!/[!@#$%^&*-+{}]/g.test(passward)) {
    return false;
  }

  return true;
}

console.log(checkPassword("Word1675&jfi38$")); //true

console.log(checkPassword("ord1675&jfi38$")); //false
