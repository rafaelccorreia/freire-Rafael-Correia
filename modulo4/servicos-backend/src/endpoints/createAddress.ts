import axios from "axios"
import { Request, Response } from "express"
import insertNewAddress from "../data/insertNewAddress"
import { Address } from "../types"

export const createAddress = async(req:Request, res:Response) => {
    try {
        const cep = req.params.cep
        const {numero} = req.body

        const requisicao = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const newAddress: Address = {
            user_id: Date.now().toString(),
            CEP: requisicao.data.cep,
            logradouro: requisicao.data.logradouro,
            numero: numero,
            complemento: requisicao.data.complemento,
            bairro: requisicao.data.bairro,
            cidade: requisicao.data.localidade,
            estado: requisicao.data.uf
        }

        const result = insertNewAddress(newAddress)

        res.status(200).send('Endereço do usuário adicionado com sucesso')
    } catch (error:any) {
        res.status(500).send({message: error.sqlMessage || error.message})
    }
}