/* global Given, When, Then*/

import LoginPage from "../PageObjects/LoginPage";
const Login = new LoginPage


Given("que acesso o site do Shopping", () => {
    Login.acessarSite();
    Login.clicarMenuUser();
})

When("informo as credenciais válidas", () =>  {
    Login.informarUserName();
    Login.informarPassword();
})
    
Then("realizo o login com sucesso", () => {
    Login.clicarBotãoSignIn();
    Login.validarUserLogado();
})

//CT02
