import React, { useContext, useEffect } from 'react'
import GlobalStateContext from "../../context/context"


const PostDetailsPage = () => {
    const {setTelaAtual} = useContext(GlobalStateContext)
    
    useEffect(() => {
        setTelaAtual('Post Details Page')
    }, [setTelaAtual])

    return(
        <div>
            PostDetails Page
        </div>
    )
}

export default PostDetailsPage