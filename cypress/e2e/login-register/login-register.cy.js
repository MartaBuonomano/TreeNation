import { Header } from "../data/UIListHeader";
import { RegisterLogin } from "../data/UIListLoginRegister";

describe('Create and Login on Tree-Nation', () => {
    let randomNumber = Math.floor(Math.random() * 100);
    let userDataCitizen = {
        first_name: `User${randomNumber}`,
        last_name: 'Test',
        email: `userTest.92+${randomNumber}@gmail.com`,
        password: 'TreeTest',
        type: 'citizen'
    };
    let userName = `${userDataCitizen.first_name} ${userDataCitizen.last_name}`;

    beforeEach(() => {
        cy.visit('/');
    });

    context('Create an account on Tree-Nation', () => {
        it(`I can create an account for citizen from the register button`, () => {
            cy.intercept('/register').as('register');
            cy.get(Header.registerButton).should('be.visible').click().then(() => {
                cy.get(RegisterLogin.registerLoginPopUp).should('be.visible');
            });
            cy.get(RegisterLogin.registerCitizen).click();
            cy.get(RegisterLogin.firstAndLastNameInput).should('be.visible').type(userName);
            cy.get(RegisterLogin.emailInput).first().should('be.visible').type(userDataCitizen.email);
            cy.get(RegisterLogin.passwordInput).first().should('be.visible').type(userDataCitizen.password);
            cy.get(RegisterLogin.submitButton).first().should('be.visible').click();
            cy.pause();
            //From here we cannot continue with the test because of a reCHAPTA.
            //Unless the dev team disables it on a local environment, the only "fair" solution is to pause the test and verify it manually to continue the creation process.
            //After pausing the test and manually verify the reCHAPTA it's necessary to manually resume the test on Cypress dashboard to let him continue with the validations.
            cy.url().should('eq', `https://tree-nation.com/profile/${userDataCitizen.first_name.toLowerCase()}-${userDataCitizen.last_name.toLowerCase()}`);
            cy.contains('The forest of');
        });
    });

    context('Login on Tree-Nation', () => {

        it(`I can do the login for citizen from the register button`, () => {
            //Here the best way it would be create a user inside this it an then use these new credential to do the login.
            //The problem is the reCHAPTA for the user creation via UI and an error probably due to the token for the user creation via API.
            //That's why in this case I've re-used the credentials of the first it.
            
            cy.get(Header.loginButton).should('be.visible').click().then(() => {
                cy.get(RegisterLogin.registerLoginPopUp).should('be.visible');
            });
            cy.get(RegisterLogin.emailInput).eq(1).should('be.visible').type(userDataCitizen.email);
            cy.get(RegisterLogin.passwordInput).eq(1).should('be.visible').type(userDataCitizen.password);
            cy.get(RegisterLogin.doLoginButton).eq(1).should('be.visible').click();
            cy.url().should('eq', `https://tree-nation.com/profile/${userDataCitizen.first_name.toLowerCase()}-${userDataCitizen.last_name.toLowerCase()}`);
            cy.contains('The forest of');
        });
    })
});

