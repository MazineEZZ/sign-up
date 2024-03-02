const passwdInput = document.querySelector("#password");
const confirmPasswdInput = document.querySelector("#confirm-password");

function doPasswordsMatch() {
  if (passwdInput.value === confirmPasswdInput.value) {
    passwdInput.classList.remove("invalid");
    confirmPasswdInput.classList.remove("invalid");
  } else {
    passwdInput.classList.add("invalid");
    confirmPasswdInput.classList.add("invalid");
  }
}

passwdInput.addEventListener("keydown", () => {
  console.log(passwdInput.value);
  console.log(confirmPasswdInput.value);
  doPasswordsMatch();
});
confirmPasswdInput.addEventListener("keydown", () => doPasswordsMatch());