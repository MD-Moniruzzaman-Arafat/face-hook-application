import React from 'react'
import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostAction from './PostAction'
import PostComment from './PostComment'

export default function PostCard({ post }) {
    return (
        <>
            <article className="card mt-6 lg:mt-8">
                {/* <!-- post header --> */}
                <PostHeader post={post} />
                {/* <!-- post header ends --> */}

                {/* <!-- post body --> */}
                <PostBody poster={post?.image} content={post?.content} />
                {/* <!-- post body ends --> */}

                {/* <!-- post actions --> */}
                <PostAction postId={post?.id} commentCount={post?.comments?.length} />
                {/* <!-- post actions  --> */}

                {/* <!-- comment section --> */}
                <PostComment post={post} />
                {/* <!-- comment section ends --> */}
            </article>
        </>
    )
}
