type User = {
    name: string,
    email: string,
    role: string
}

const usersList: User[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

function buscarEmails (listaUsuarios: User[]): string[] {
    let listaDeEmails: string[] = []
    listaUsuarios.forEach(user => {
        if(user.role === 'admin') {
            listaDeEmails.push(user.email)
        }
    })
    return listaDeEmails
}

console.log(buscarEmails(usersList))