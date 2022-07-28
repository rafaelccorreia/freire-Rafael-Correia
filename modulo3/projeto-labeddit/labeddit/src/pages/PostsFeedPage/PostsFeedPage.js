import React from 'react'

import useTela from '../../hooks/useTela'
import useProtectedPage from '../../hooks/useProtectedPage'

const PostsFeedPage = () => {
    useProtectedPage()
    useTela('Posts Feed Page')

    return(
        <div>
            PostsFeed Page
        </div>
    )
}

export default PostsFeedPage