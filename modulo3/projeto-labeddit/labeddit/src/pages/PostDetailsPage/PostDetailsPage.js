import React from 'react'

import useTela from '../../hooks/useTela'
import useProtectedPage from '../../hooks/useProtectedPage'

const PostDetailsPage = () => {
    useProtectedPage()
    useTela('Post Details Page')

    return(
        <div>
            PostDetails Page
        </div>
    )
}

export default PostDetailsPage