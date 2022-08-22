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