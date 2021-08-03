/// <reference types ="cypress"/>

import CadastroElements from "../Elements/CadastroElements";
const Elements = new CadastroElements
const NavegadorUrl = Cypress.config("baseUrl")

class CadastroPage{

    acessarSite(){
        cy.visit(NavegadorUrl)
        cy.wait(3100)
    }

    clicarMenuUsuario(){
        cy.wait(2000)
        cy.get(Elements.btnMenuUsuario()).click();
    }

    clicarCreateNewAccount(){
        cy.get(Elements.createNewAccount()).click();
    }

    inserirUserName(){
        cy.get(Elements.userName()).type("testelaercio1")
    }

    inserirEmail(){
        cy.get(Elements.CadastroEmail()).type("laercioTeste@teste.com")
    }

    inserirPassword(){
        cy.get(Elements.Password()).type("La123456")
        cy.get(Elements.ConfirmPassword()).type("La123456")
    }

    inserirFirstName(){
        cy.get(Elements.FirstName()).type("Laércio")
    }

    inserirLastName(){
        cy.get(Elements.LastName()).type("Andrade")
    }

    inserirPhone(){
        cy.get(Elements.Phone()).type("1111111111")
    }

    selecionarCountry(){
        cy.get(Elements.Country()).select("Brazil")
    }

    inserirCity(){
        cy.get(Elements.City()).type("São Paulo")
    }

    inserirAddress(){
        cy.get(Elements.Address()).type("Rua do teste 500")
    }

    inserirState(){
        cy.get(Elements.State()).type("São Paulo")
    }

    inserirPostalCode(){
        cy.get(Elements.PostalCode()).type("086940SP")
    }

    clicarBotãoDeCondição(){
        cy.get(Elements.btnAcceptCondition()).click();
    }

    clicarBotãoRegister(){
        cy.route('POST', '**/AccountCreateRequest').as('postCreateRequest')
        cy.get(Elements.btnRegister()).click();
    }

    validarUserLogado(){
        cy.wait('@postCreateRequest').then((xhr) => {
            expect(xhr.status).be.eq(200);
        cy.get(Elements.userlogado()).contains("testelaercio1")   
    })
  } 
}

export default CadastroPage;