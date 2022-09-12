import { app } from "./app"
import { UserEndpoint } from "./enpoints/UserEnpoint"

const userEndpoint: UserEndpoint = new UserEndpoint()

app.post("/usuario/cadastrar", userEndpoint.criarUsuario)