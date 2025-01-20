const SELECT_STARTDATE = '#startdate'
const SELECT_INSURANCESUM = '#insurancesum'
const SELECT_MARITRATING = '#meritrating'
const SELECT_DAMAGEINSURANCE = '#damageinsurance'
const SELECT_OPTIONALPRODUCTS = 'label.ideal-radiocheck-label'
const SELECT_COURTESYCAR = '#courtesycar'
const BNT_NEXT = '#nextselectpriceoption'

Cypress.Commands.add('inserirDadosProductData', () => { 
    cy.get(SELECT_STARTDATE).type('11/05/2025')
    cy.get(SELECT_INSURANCESUM).select('10.000.000,00')
    cy.get(SELECT_MARITRATING).select('Malus 10')
    cy.get(SELECT_DAMAGEINSURANCE).select('No Coverage')
    cy.get(SELECT_OPTIONALPRODUCTS).contains('Legal').click();
    cy.get(SELECT_COURTESYCAR).select('No')
})

Cypress.Commands.add('botaoNext', () => {
    cy.get(BNT_NEXT).click()
})