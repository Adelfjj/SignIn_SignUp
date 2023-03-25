const submitSignIn = document.querySelector("#submit_SignIn");
const submitSignUp = document.querySelector("#submit_SignUp");
const createAccount = document.querySelector(".create");
const information = document.querySelector(".information");
const ReturnSignIn = document.querySelector(".sign_in");
const inpPasswordIn = document.querySelector("#password_SignIn");
const message = document.querySelector("#message");
const btnMessage = message.querySelector("button");
let h2 = information.querySelector("h2");
const formSignIn = document.querySelector("section.signIn form");

formSignIn.addEventListener("submit", (e) => {
    e.preventDefault();
    CorrectPassword(inpPasswordIn.value);
});

submitSignUp.addEventListener("click", (e) => {
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

const regex = /[0-9]/;
const CorrectPassword = (inputValue) => {
    if(inputValue.length >= 8){
        if(regex.test(inputValue)){
            console.log("contem numero!");
        }else{
            SetMessage("A senha deve conter ao menos um numero!");
        }
    }else{
        SetMessage("A senha deve conter no minimo 8 caracteres!");
    }
}

const SetMessage = (text) => {
    message.querySelector("p").textContent = text;
    message.showModal();
}

btnMessage.addEventListener("click", () => {
    message.close();
    inpPasswordIn.focus();
});