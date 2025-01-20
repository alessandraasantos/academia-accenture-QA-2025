const INPUT_FIRSTNAME = '#firstname'
const INPUT_LASTNAME = '#lastname'
const SLC_BIRTHDAYDATE = '#birthdate'
const SLC_COUNTRY = '#country'
const INPUT_ZIPCODE = '#zipcode'
const SLC_OCCUPATION = '#occupation'
const SELECT_HOBBIES = 'label.ideal-radiocheck-label'
const BTN_NEXT = '#nextenterproductdata'


Cypress.Commands.add('inserirDadosEnterInsurantData', () => {
    cy.get(INPUT_FIRSTNAME).type('Camila')
    cy.get(INPUT_LASTNAME).type('Maria')
    cy.get(SLC_BIRTHDAYDATE).type('01/02/1994')
    cy.get(SLC_COUNTRY).select('Brazil')
    cy.get(INPUT_ZIPCODE).type('50850021')
    cy.get(SLC_OCCUPATION).select('Farmer')
    cy.get(SELECT_HOBBIES).contains('Speeding').click();

})

Cypress.Commands.add('botao_next', () => {
    cy.get(BTN_NEXT).click()
})

