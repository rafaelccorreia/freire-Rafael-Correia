### Exercício 1
a) uma chave estrangeira é um elemento de uma tabela que faz referença a primary key de outra tabela.

b)
```
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
	"a",
    "Muito bom o filme!",
    8.8,
    "001"
),(
	"b",
    "Não era o que eu esperava, mas não foi ruim.",
    5,
    "003"
),(
	"c",
    "Amei!",
    10,
    "002"
);
```

c)
```
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
	"d",
    "Nossa",
    7.8,
    "005"
);
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`freire-rafael-correia`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
    // Não da para adicionar ou atualizar valores na linha já que a referência de id em Filmes não existe.
```

d)
```
ALTER TABLE Filmes DROP COLUMN avaliacao;
```

e)
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`freire-rafael-correia`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
    //Não da para deletar elementos de uma tabela referenciada por outra, pois a tabela "child" perderá o uso.
```

### Exercício 2
a) Os elementos da tabela receberão o id do filme e o id do ator/atriz. Cada um faz referência ao id na outra tabela.

b)
```
INSERT INTO MovieCast (movie_id, actor_id)
VALUE(
	"001",
    "001"
),(
	"001",
    "005"
),(
	"003",
    "007"
),(
	"002",
    "005"
),(
	"001",
    "006"
),(
	"002",
    "003"
);
```

c)
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`freire-rafael-correia`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
    //Erro de ao tentar achar o id do filme na tabela de Filmes
```

d)
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`freire-rafael-correia`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
    //Não pode deletar um ator que tem o id referenciado em outra tabela.
```

### Exercício 3
a) O operador "ON" liga as referências de mesmo valor no id para que fiquem alinhadas

b) 
```
SELECT Filmes.nome, Filmes.id, Rating.rate FROM Filmes 
INNER JOIN Rating ON Filmes.id = Rating.movie_id;
```

### Exercício 4
a)
```
SELECT Filmes.nome, Filmes.id, Rating.rate, comment FROM Filmes 
LEFT JOIN Rating ON Filmes.id = Rating.movie_id;
```

b)
```
SELECT Filmes.id, Filmes.nome, actor_id FROM Filmes 
INNER JOIN MovieCast ON Filmes.id = movie_id;
```

c)
```
SELECT AVG(Rating.rate), Filmes.id, Filmes.nome FROM Filmes 
LEFT JOIN Rating ON Filmes.id = movie_id
GROUP BY(Filmes.id);
```

### Exercício 5
a) É necessário 2 joins, pois para juntar as tabelas é preciso juntar duas em duas, após o primeiro join fazemos a junção com a última tabela.

b)
```
SELECT f.id as movie_id, f.nome, actor_id, a.name FROM Filmes f
LEFT JOIN MovieCast mc ON f.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

c)
```
Error Code: 1054. Unknown column 'm' in 'field list'
    // m faz referência a tabela de filmes, não da para retorna ela sem especificar o que deve ser retornado
```

d)
```
SELECT Filmes.id, Filmes.nome, Actor.id, Actor.name, Rating.rate, Rating.comment FROM Filmes
LEFT JOIN Rating ON Rating.movie_id = Filmes.id
LEFT JOIN MovieCast ON Filmes.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```