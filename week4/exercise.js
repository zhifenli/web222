function fixPostalCode(postalCode) {
    if (postalCode.charAt(3) == " ") {
      throw new Error;
    }
    let result = postalCode.replace(/[\s-]/g, "").toUpperCase();
    result = result.substring(0, 3) + " " + result.substring(3);
    // A1A 1A1
    if (result.length != 7) {
      throw new Error();
    }
    const badFirstLetters = ["D", "F", "I", "O", "Q", "W", "U", "Z"];
    const badThirdLetters = "DFIOQU";
    const badSixthLetters = "DFIOQU"
    if (badFirstLetters.includes(result.charAt(0))) {
      throw new Error();
    }
    if (badThirdLetters.includes(result.charAt(2))) {
      throw new Error();
    }
    if (badSixthLetters.includes(result.charAt(5))) {
      throw new Error();
    }
  
    if (!/[A-Z]\d[A-Z]\s\d[A-Z]\d/.test(result)) {
      throw new Error();
    }
    console.log(result);
    return result;
  
    // Replace this comment with your code...
  }

  