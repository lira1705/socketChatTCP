# Exercício de Sockets  
  
Exercício voltado para a criação de um chat entre vários usuários baseado nesse tutorial: https://www.youtube.com/watch?v=R84rTfBMaoU

1. Semelhante ao exemplo do vídeo anterior, crie uma aplicação console que funcionará como chat ponto a ponto, onde um cliente utiliza socket1 para se conectar a um Servidor.  
Tanto no cliente como no servidor será possível digitar mensagens do chat a partir do console.   

2. Baseado no exemplo anterior, crie uma nova versão para o chat, desta vez com suporte a conexão simultânea de vários clientes. Agora o servidor não necessita mais receber texto do console. Ele será apenas o mediador das mensagens entre os vários clientes conectados.  

Requisitos:  
a. O servidor deve pedir ao usuário cliente para digitar um nome de modo que as mensagens de cada usuário possam ser identificadas.  
b. As mensagens enviadas por um cliente são replicadas para todos os outros clientes.  

## Quais as principais dificuldades?  
No primeiro exemplo existe apenas uma conexão ponta a ponta, então não é necessário se preocupar em repassar uma mensagem de uma conexão para outros usuários.  

## Quais as principais diferenças entre a implementação da questão 1 e da questão 2?  
Para criar o chat foi necessário manipular uma lista das conexões, pois a biblioteca não tem uma implementação de broadcast. Ou seja, precisei enviar uma mensagem para cada usuário na lista de usuários.
Com isso surgiu a complexidade de adicionar/deletar/buscar na lista.

## Como gerenciar as conexões entre clientes na questão 2?  
Usei uma lista com um objeto para cada usuário.  

## Como identificar as mensagens e os remetentes para seguir a formatação do exemplo?  
Ao iniciar a conexão a aplicação requisita um nome de usuário para atribuir uma identificação para aquele socket. Se o usuário digitar um nome repetido, é pedido outro nome para ele. Assim, cada usuário tem um identificador único.
