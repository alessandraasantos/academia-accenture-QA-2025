const SELC_SILVER = '#selectsilver'
const BTN_NEXT = '#nextsendquote'


Cypress.Commands.add('selecionarplano', () => {
    cy.get(SELC_SILVER).check({ force: true }) 
})


Cypress.Commands.add('btn_nxt_spo', () => {
    cy.get(BTN_NEXT).click()
})
