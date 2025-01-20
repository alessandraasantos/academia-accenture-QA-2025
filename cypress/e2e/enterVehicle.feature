# utf-8
# language: pt

Funcionalidade: Contratar seguro de veiculo
    Cenário: Validacao Seguro Automovel Valido
        Dado que acesso a Vehicle Insurance Application
        Quando preencho os campos obrigatorios do Enter Vehicle Data
        E clico no botão next
        E preencho os campos obrigatorios do Enter Insurant Data
        E clico no botao next
        E preencho os campos obrigatorios do Enter Product Data
        E clico em next 
        E seleciono uma opcao do Select Price Option
        E seleciono o botao next 
        E preencho os campos da Send Quote
        E clico no botao Send
        Entao sera confirmado com sucesso 

    
    Cenário: Criando os formularios de  Seguro de Veiculo Invalida
         Dado que estou na tela Vehicle Insurance Application
         Quando preencho um campo obrigatório com uma informação incorreta
         Então uma mensagem de campo obrigatório deve ser exibida
       
