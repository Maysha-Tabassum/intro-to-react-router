import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './PostDetail.css'

const PostDetail = () => {
    const post = useLoaderData();
    return (
        <div className='post-detail'>
            <h2>Post details are here</h2>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;