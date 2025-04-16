import React from 'react'
import PostCard from './PostCard'

export default function PostList({ posts }) {
    return (
        <>
            {
                posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </>
    )
}
