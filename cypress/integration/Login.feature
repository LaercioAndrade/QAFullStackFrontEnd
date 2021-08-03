Feature: Realizar Login no site 

Scenario: Realizar Login com um usuário válido
    Given que acesso o site do Shopping
    When informo as credenciais válidas
    Then realizo o login com sucesso

Scenario: Validar mensagem de erro quanto tenta realizar login com credenciais inválidas
    Given que acesso o site do Shopping
    When informo as credenciais inválidas
    Then valido se aparece a mensagem de erro 
