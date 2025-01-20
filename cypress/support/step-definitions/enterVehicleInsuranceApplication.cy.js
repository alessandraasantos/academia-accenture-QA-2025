Given ('que acesso a Vehicle Insurance Application', () =>{

    cy.visit('https://sampleapp.tricentis.com/101/app.php')
})
 
When ('preencho os campos obrigatorios do Enter Vehicle Data', () => {
    cy.inserirDadosVehicleData()
   
})

And ('clico no botão next', () => {
    cy.proximaPagina() 
})

And ('preencho os campos obrigatorios do Enter Insurant Data', () => {
    cy.inserirDadosEnterInsurantData()
})

And ('clico no botao next', () => {
    cy.botao_next() 
})

And ('preencho os campos obrigatorios do Enter Product Data', () => {
    cy.inserirDadosProductData()
})

And ('clico em next', () => {
    cy.botaoNext() 
})

And('seleciono uma opcao do Select Price Option', () => {
    cy.selecionarplano()
})

And('seleciono o botao next', () => {
    cy.btn_nxt_spo() 
})

And ('preencho os campos da Send Quote', () => {
    cy.inserirDadosSendQuote()
})

And ('clico no botao Send', () => {
    cy.clicarbotaoSend()
})

 Then ('sera confirmado com sucesso', () => {
     cy.validarMensagemDeSucesso()
 })
