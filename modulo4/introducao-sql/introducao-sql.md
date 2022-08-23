### Exercício 1
```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

```
a)  temos o comando `CREATE TABLE` que ser para criar a tabela
    o comando `VARCHAR` indica que o name é uma string com até um certo número limite de characters
    `DATE` indicar que birth_date será uma data
    `NOT NULL` testa para saber se o valor não é nulo

b)  `SHOW TABLES` mostra a lista de tabelas com seus dados
    `SHOW DATABASES` mostra a lista com os bancos de dados

C)
    `DESCRIBE` mostra os detalhes da tabela que vem após o comando 


### Exercício 2
a) 
```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "002",
        "Glória Pires",
        1200000,
        "1963-08-23",
        "female"
    );
```

b) Código de erro: 1062. Entrada duplicada "002" para a key PRYMARY. Aconteceu esse erro pq utilizei o mesmo id novamente.

c) Código de erro: 1136. Número de colunas diferente do número de linhas
    R: 
        ```
            INSERT INTO Actor (id, name, salary, birth_date, gender)
            VALUES(
            "003", 
            "Fernanda Montenegro",
            300000,
            "1929-10-19", 
            "female"
            );
        ```

d)  1364, Campo nome não possui um valor padrão
    R: 
    ```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "004",
    "Bruno Gagliasso",
    400000,
    "1949-04-18", 
    "male"
    );
    ```

e) 1292, valor incorreto de data incorreto
    R:
    ```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "005", 
    "Juliana Paes",
    719333.33,
    "1979-03-26", 
    "female"
    );
    ```

f) 
    ```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "006",
        "José Loreto",
        585222,
        "1984-05-27",
        "male"
    ),
    (
        "007",
        "Glória Perez",
        879987,
        "1948-09-25",
        "female"
    );
    ```


### Exercício 3
a) 
    ```
    SELECT * from Actor WHERE gender = "female";
    ```
b) 
    ```
    SELECT salary from Actor WHERE name = "Tony Ramos";
    ```
c) 
    ```
    SELECT * from Actor WHERE gender = "invalid";
    ```
    retorna 0 resultados, já que não existe nenhum elemento com o valor "invalid" em gender
d) 
    ```
    SELECT id, name, salary from Actor WHERE salary < 500000;
    ```
e)
    coluna desconhecida 'nome' na lista
    ```
    SELECT id, name from Actor WHERE id = "002";
    ```


### Exercício 4
a) a query busca todos os dados de atores em que o (nome começa com A ou J) e o salário é mairo que 300000
b) 
    ```
    SELECT * FROM Actor
    WHERE name NOT LIKE "A%" AND salary > 350000;
    ```
c) 
    ```
    SELECT * FROM Actor
    WHERE name LIKE "%G%" AND name LIKE "%g%";
    ```
D) 
    ```
    SELECT * FROM Actor
    WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;
    ```


### Exercício 5
a) 
    ```
        CREATE TABLE Filmes (
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            sinopse TEXT NOT NULL,
            data_de_lancamento DATE NOT NULL,
            avaliacao BIT NOT NULL
        );
    ```
    TEXT é um tipo que serve para strings com um tamanho de até 65,535 bytes

b)c)d)e)
    ```
        INSERT INTO Filmes ( id, nome, sinopse, data_de_lancamento, avaliacao )
        VALUES (
            "001",
            "Se Eu Fosse Voçê",
            "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
            "2006-01-06",
            7
        ), 
        (
            "002",
            "Doce de mãe",
            "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
            "2012-12-27",
            10
        ),
        (
            "003",
            "Dona Flor e Seus Dois Maridos",
            "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
            "2017-11-02",
            8
        ),
        (
            "004",
            "O Auto da Compadecida",
            "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
            "2000-09-10",
            9
        );
    ```


### Exercício 6
a)b)c)
    ```
        SELECT id, nome, avaliacao FROM Filmes WHERE id = "001";
        SELECT * FROM Filmes WHERE nome = "Doce de mãe";
        SELECT id, nome, sinopse FROM Filmes WHERE avaliacao >= 7;
    ```


### Exercício 7
a)b)c)d)
    ```
        SELECT * FROM Filmes WHERE nome LIKE "%vida%";
        SELECT * FROM Filmes WHERE nome LIKE "%dois%" OR sinopse LIKE "%dois%";
        SELECT * FROM Filmes WHERE data_de_lancamento < "2022-08-22";
        SELECT * FROM Filmes WHERE (data_de_lancamento < "2022-08-22") AND (nome LIKE "%dois%" OR sinopse LIKE "%dois%") AND (avaliacao >= 7);
    ```