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