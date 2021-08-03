/// <reference types ="cypress"/>

import LoginElements from "../Elements/LoginElements";
const Elements = new LoginElements;
const NavegadorUrl = Cypress.config("baseUrl")

class LoginPage{

    acessarSite(){
        cy.visit(NavegadorUrl)
        cy.wait(3100)
    }

    clicarMenuUser(){
        cy.get(Elements.menuUser()).click();
    }

    informarUserName(){
        cy.get(Elements.userName()).type("testelaercio9")
    }

    informarPassword(){
        cy.get(Elements.password()).type("La123456")
    }

    clicarBotãoSignIn(){
        cy.route('POST', '**/AccountLoginRequest').as('postLoginRequest')
        cy.get(Elements.btnSignIn()).click();
    }

    validarUserLogado(){
        cy.wait('@postLoginRequest').then((xhr) => {
            expect(xhr.status).be.eq(200);
        cy.get(Elements.userlogado()).contains("testelaercio9")
        })
    }

    informarUserNameInvalido(){
        cy.get(Elements.userName()).type("teste123")
    }

    validarMsgDeLoginIncorreto(){
        cy.wait('@postLoginRequest').then((xhr) => {
            expect(xhr.status).be.eq(200);
        cy.get(Elements.msgLoginIncorreto()).contains("Incorrect user name or password.")
        })
    }
}
export default LoginPage;