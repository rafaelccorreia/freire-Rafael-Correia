import axios from "axios"
import { toast } from 'react-toastify'

import { BASE_URL } from "../constants/urls"

export const CreatePost = (body) => {
    toast.loading('Criando Postangem...')
    const token = localStorage.getItem('token')
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: token
        }
    })
    .then(res => {
        toast.dismiss()
        toast.success('Post criado!')
    })
    .catch(err => {
        toast.dismiss()
        toast.error('Falha na criação do post.')
    })
}

export const GetPostDetails = (id) => {
    toast.loading('Carregando...')
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}/posts/${id}`, {
        headers: {
            Authorization: token
        }
    })
    .then(res => {
        toast.dismiss()
        console.log(res)
    })
    .catch(err => {
        toast.dismiss()
        console.log(err)
    })
}