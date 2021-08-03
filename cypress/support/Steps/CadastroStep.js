/* global Given, When, Then*/

import CadastroPage from "../PageObjects/CadastroPage";
const Cadastro = new CadastroPage


Given("que acesso o site do shopping", () => {
    Cadastro.acessarSite();
})

And("acesso a tela de cadastro", () => {
    Cadastro.clicarMenuUsuario();
    Cadastro.clicarCreateNewAccount();
})

When("informo os dados corretos", () => {
    Cadastro.inserirUserName();
    Cadastro.inserirEmail();
    Cadastro.inserirPassword();
    Cadastro.inserirFirstName();
    Cadastro.inserirLastName();
    Cadastro.inserirPhone();
    Cadastro.selecionarCountry();
    Cadastro.inserirCity();
    Cadastro.inserirAddress();
    Cadastro.inserirState();
    Cadastro.inserirPostalCode();
    Cadastro.clicarBotãoDeCondição();
})

Then("valido se o cadastro é realizado com sucesso", () => {
    Cadastro.clicarBotãoRegister();
    Cadastro.validarUserLogado();
})