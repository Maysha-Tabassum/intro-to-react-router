import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetail.css'

const PostDetail = () => {
    const navigate = useNavigate()
    const post = useLoaderData();
    const handleNavigate = () => {
        navigate(-1);
    }
    return (
        <div className='post-detail'>
            <h3>Id: {post.id}</h3>
            <h2>Post details are here</h2>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button className='btn' onClick={handleNavigate}>Go back</button>
        </div>
    );
};

export default PostDetail;