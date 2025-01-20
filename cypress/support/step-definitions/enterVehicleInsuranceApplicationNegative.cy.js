Given ('que estou na tela Vehicle Insurance Application', () =>{

    cy.visit('https://sampleapp.tricentis.com/101/app.php')
})
When ('preencho um campo obrigatório com uma informação incorreta', () => {
    cy.inserirDadosNegativo()
   
})
Then ('uma mensagem de campo obrigatório deve ser exibida', () => {
     cy.mensagemDeErro()
})