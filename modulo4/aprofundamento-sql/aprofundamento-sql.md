### Exercício 1
a)  ``` ALTER TABLE Actor DROP COLUMN salary;  ```
    retira a coluna salário da tabela

b) ```   ALTER TABLE Actor CHANGE gender sex VARCHAR(6);   ```
    altera as propriedades de gender para sex VARCHAR(6)

c) ```   ALTER TABLE Actor CHANGE gender gender VARCHAR(255);   ```
    altera gender e suas propriedades para gender VARCHAR(255)

d) ```   ALTER TABLE Actor CHANGE gender gender VARCHAR(100);   ```


### Exercício 2
a) 

```

UPDATE Actor
SET name = "Moacyr Franco", birth_date = "2008-05-25"
WHERE id = "003";

```

b) 

```

UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

```

c)

```

UPDATE Actor
SET name = "Novo nome", birth_date = "2000-12-12", salary = 123456, gender = "male"
WHERE id = "005";


```

d) Funcionou normalmente sem dar erros, porém 0 linhas foram afetadas

```

UPDATE Actor
SET name = "Teste"
WHERE id = "009";

```


### Exercício 3
a) 

```

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

```

b) 

```

DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

```


### Exercício 4
a)b)c)d)

```

SELECT MAX(salary) FROM Actor;
SELECT MIN(salary) FROM Actor WHERE gender = "female";
SELECT COUNT(*) FROM Actor WHERE gender = "female";
SELECT SUM(salary) FROM Actor;

```


### Exercício 5
a) Pega as informações de quantidade e gender da tabela Actor e agrupa por gender

b) 

```

SELECT id, name
FROM Actor
ORDER BY name DESC;

```

c) 

```

SELECT * FROM Actor ORDER BY salary ASC;

```

d) 

```

SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

```

e) 

```

SELECT AVG(salary),gender FROM Actor GROUP BY gender;

```


### Exercício 6
a)b)c)
d) Não deu erro no código, rodou normalmente. Mas 0 linhas foram afetadas pelas mudanças.

```

ALTER TABLE Filmes ADD playing_limit_date DATE;
ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;
UPDATE Filmes
SET playing_limit_date = "2022-09-05"
WHERE id = "001";

UPDATE Filmes
SET playing_limit_date = "2021-01-30"
WHERE id = "002";

DELETE FROM Filmes WHERE id ="004";
UPDATE Filmes
SET sinopse = "teste"
WHERE id = "004";

```