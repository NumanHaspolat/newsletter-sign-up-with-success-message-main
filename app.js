const bntSub = document.querySelector(".btn-sub");
const errorLabel = document.querySelector(".error-label");
const emailInp = document.getElementById("email");
const successCard = document.querySelector(".success-mesage-card");
const lastEmail = document.querySelector(".last-email");

bntSub.addEventListener("click", () => {
  validateEmail(emailInp);
});

function validateEmail(inputText) {
  const mailFormat = /\S+@\S+\.\S+/;
  if (inputText.value.match(mailFormat)) {
    setTimeout(() => {
      emailInp.closest(".container").classList.add("hidden");
      successCard.classList.remove("hidden");
      localStorage.setItem("email", emailInp.value);
      lastEmail.innerHTML = emailInp.value;
      return true;
    }, 300);
  } else {
    errorLabel.classList.remove("hidden");
    emailInp.style.borderColor = "red";
    emailInp.style.outline = "red";
    emailInp.style.color = "red";
    emailInp.style.background = "hsl(4, 100%, 90%)";
    return false;
  }
}
