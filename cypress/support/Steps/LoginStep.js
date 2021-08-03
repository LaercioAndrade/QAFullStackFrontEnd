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
When("informo as credenciais inválidas", () => {
    Login.informarUserNameInvalido();
    Login.informarPassword();
})

Then("valido se aparece a mensagem de erro", () => {
    Login.clicarBotãoSignIn();
    Login.validarMsgDeLoginIncorreto();
    cy.screenshot();
})