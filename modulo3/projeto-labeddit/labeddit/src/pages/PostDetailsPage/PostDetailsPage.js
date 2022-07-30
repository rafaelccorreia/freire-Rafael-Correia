import React from 'react'

import useTela from '../../hooks/useTela'
import useProtectedPage from '../../hooks/useProtectedPage'
import { GetPostDetails } from '../../services/posts'
import { useParams } from 'react-router-dom'

const PostDetailsPage = () => {
    useProtectedPage()
    useTela('Post Details Page')
    const { id } = useParams()

    GetPostDetails(id)

    return(
        <div>
            PostDetails Page
        </div>
    )
}

export default PostDetailsPage