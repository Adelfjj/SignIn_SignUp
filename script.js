const submitBtn = document.querySelector("#submit");
const createAccount = document.querySelector(".create");
const information = document.querySelector(".information");
const ReturnSignIn = document.querySelector(".sign_in");
let h2 = information.querySelector("h2");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
});

createAccount.addEventListener("click", () => {
    information.classList.toggle("sign");
        h2.textContent = "Join Us!";
});

ReturnSignIn.addEventListener("click", () => {
    information.classList.toggle("sign");
    h2.textContent = "Welcome Back!";
});

