<h1 align="center">Projeto LabeBank</h1>

## API LabeBank, projeto Backend de requisições que simulam a transferências de dados entre o Frontend e o banco de dados de um banco

### O que funciona
- Há uma requisição que retorna todas as contas ( Pegar Contas )
- Há uma requisição que recebe os dados do usuário e retorna o  seu saldo ( Pegar Saldo )
- É possível criar contas através de um requisição, enviando o nome, CPF e data de nascimento ( Criar Conta )
- Há uma requisição para fazer depósitos e aumentar o valor do saldo de uma conta específica ( Adicionar Saldo )
- É possível fazer pagamentos, os dados da cobrança serão adicionando na lista de extrato do usuário ( Pagar Conta )
- É possível fazer transferências entre contas cadastradas, desde que o usuário tenha saldo disponível em conta ( Transferencia )
- Todas as requisições contam com validação de dados e mensagens de erro para orientar o usuário caso algo esteja fora do padrão
- Criei uma documentação com mais detalhes sobre a API, o link está logo abaixo ⬇

### O que não funciona
- Os CPFs não possuem validação oficial e podem receber qualquer string, para que não seja preciso usar dados reais

### Documentação da API
https://documenter.getpostman.com/view/21557009/VUqoRyqP

auth: ADMIM para ser usado no headers da requisição Pegar Contas
