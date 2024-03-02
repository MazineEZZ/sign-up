const passwdDiv = document.querySelector(".password");
const passwdInput = document.querySelector("#password");
const confirmPasswdInput = document.querySelector("#confirm-password");

function doPasswordsMatch() {
  if (passwdInput.value !== confirmPasswdInput.value || !passwdInput.value || !confirmPasswdInput.value) {
    passwdInput.classList.add("invalid");
    confirmPasswdInput.classList.add("invalid");
    passwdDiv.classList.add("error");
    return false;
  } else {
    passwdInput.classList.remove("invalid");
    confirmPasswdInput.classList.remove("invalid");
    passwdDiv.classList.remove("error");
    return true;
  }
}

passwdInput.addEventListener("keyup", () => doPasswordsMatch());
confirmPasswdInput.addEventListener("keyup", () => doPasswordsMatch());