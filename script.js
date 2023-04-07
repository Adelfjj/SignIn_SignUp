const submitSignIn = document.querySelector("#submit_SignIn");
const submitSignUp = document.querySelector("#submit_SignUp");
const createAccount = document.querySelector(".create");
const information = document.querySelector(".information");
const ReturnSignIn = document.querySelector(".sign_in");
const message = document.querySelector("#message");
const btnMessage = message.querySelector("button");
let h2 = information.querySelector("h2");

const signUpSection = document.querySelector(".signUp");
const signInSection = document.querySelector(".signIn");

const inpPasswordIn = document.querySelector("#password_SignIn");
const inpPasswordUp = document.querySelector("#password_SignUp");
const email_SignIn = document.querySelector("#email_SignIn");
const email_SignUp = document.querySelector("#email_SignUp");

submitSignIn.addEventListener("click", (e) => {
    e.preventDefault();

    validateEmail(email_SignIn.value) ? 
    validatePassword(inpPasswordIn.value) : 
    setMessage('O E-mail deve seguir o padrão: "Teste@teste.com"');

});

submitSignUp.addEventListener("click", (e) => {
    e.preventDefault();

    validateEmail(email_SignUp.value) ? 
    validatePassword(inpPasswordUp.value) : 
    setMessage('O E-mail deve seguir o padrão: "Teste@teste.com"');
});

createAccount.addEventListener("click", () => {
    information.classList.toggle("sign");
    signInSection.classList.toggle("out");
    signUpSection.classList.toggle("in");
    
        h2.textContent = "Join Us!";
});

ReturnSignIn.addEventListener("click", () => {
    information.classList.toggle("sign");
    signInSection.classList.toggle("out");
    signUpSection.classList.toggle("in");
    h2.textContent = "Welcome Back!";
});


const validatePassword = (inputValue) => {
    const regex = /[0-9]/;

    if(inputValue.length >= 8){
        if(regex.test(inputValue)){
            console.log("Verificado!");
        }else{
            setMessage("A senha deve conter ao menos um numero!");
        }
    }else{
        setMessage("A senha deve conter no minimo 8 caracteres e um numero !");
    }
}

const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    console.log(email);
    return re.test(email);
}

const setMessage = (text) => {
    message.querySelector("p").textContent = text;
    message.showModal();
}

btnMessage.addEventListener("click", () => {
    message.close();
    inpPasswordIn.focus();
});