# Exercício de Sockets  
  
Exercício voltado para a criação de um chat entre vários usuários baseado nesse tutorial: https://www.youtube.com/watch?v=R84rTfBMaoU

Requisitos:
a. O servidor deve pedir ao usuário cliente para digitar um nome de modo que as mensagens de cada usuário possam ser identificadas.  
b. As mensagens enviadas por um cliente são replicadas para todos os outros clientes.  

## Quais as principais dificuldades?  
No primeiro exemplo existe apenas uma conexão ponta a ponta, então não é necessário se preocupar em repassar uma mensagem de uma conexão para outros usuários.  

## Quais as principais diferenças entre a implementação da questão 1 e da questão 2?  
Para criar o chat foi necessário manipular uma lista das conexões, pois a biblioteca não tem uma implementação de broadcast. Ou seja, precisei enviar uma mensagem para cada usuário na lista de conexões.
Com isso surgiu a complexidade de adicionar/deletar/buscar na lista.

## Como gerenciar as conexões entre clientes na questão 2?  
Usei uma lista com um objeto para cada usuário.  

## Como identificar as mensagens e os remetentes para seguir a formatação do exemplo?  
Ao iniciar a conexão a aplicação requisita um nome de usuário para atribuir uma identificação para aquele socket. Se o usuário digitar um nome repetido, é pedido outro nome para ele. Assim, cada usuário tem um identificador único.
