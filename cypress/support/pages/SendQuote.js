const INPUT_EMAIL = '#email'
const INPUT_USERNAME = '#username'
const INPUT_PASSWORD = '#password'
const INPUT_CONFIRM_PASSWORD = '#confirmpassword'
const BTN_SEND = '#sendemail'
const ALERT_MESSAGE = '.sweet-alert';


Cypress.Commands.add('inserirDadosSendQuote', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('email'))    
    cy.get(INPUT_USERNAME).type('joana')
    cy.get(INPUT_PASSWORD).type(Cypress.env('password'))       
    cy.get(INPUT_CONFIRM_PASSWORD).type(Cypress.env('confirmPassword'))  
})

Cypress.Commands.add('clicarbotaoSend', () => {
    cy.get(BTN_SEND).click()
})

Cypress.Commands.add('validarMensagemDeSucesso', () => {
    cy.get(ALERT_MESSAGE, { timeout: 10000 }) 
        .should('be.visible') 
        .and('contain', 'Sending e-mail success!');
        cy.pause();
});