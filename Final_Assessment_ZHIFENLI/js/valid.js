function validateInput(){
    var postCode = document.getElementById("Postal").value.trim();
    var error = document.getElementById('error');
    let valid = true;
    let postCodeRep =/[a-zA-Z]\d[a-zA-Z]\s?\d[a-zA-Z]\d/gm;
    if(!postCodeRep.test(postCode)){
        error.innerHTML += "Please enter the right Post Code!"
        valid = false;
    }
    return valid;
}

function handleChangeOther(){
    const messageEle = document.getElementById("other-input-container");
    const textBox = document.createElement("input");
    textBox.classList = "message_text";
    textBox.name = "message";
    messageEle.innerHTML = "";
    messageEle.appendChild(textBox);
}

function myFunction() {
    var ele = document.getElementById("topnav");
    if (ele.className === "topnav") {
      ele.className += " responsive";
    } else {
      ele.className = "topnav";
    }
  }


