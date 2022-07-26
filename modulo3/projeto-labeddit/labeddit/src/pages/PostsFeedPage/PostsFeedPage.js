import React, { useContext, useEffect } from 'react'
import GlobalStateContext from "../../context/context"


const PostsFeedPage = () => {
    const {setTelaAtual} = useContext(GlobalStateContext)
    
    useEffect(() => {
        setTelaAtual('Posts Feed Page')
    }, [setTelaAtual])

    return(
        <div>
            PostsFeed Page
        </div>
    )
}

export default PostsFeedPage