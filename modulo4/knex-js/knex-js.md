### Exercício 1
a) recebemos o resultado da requisição e mais algumas informações que o SQL devolve
b) 
```
getActorByName("Tony Ramos")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });
```
c)
```
const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
    // o valor no resultado!
    const count = result[0][0].count;
    return count;
};
```