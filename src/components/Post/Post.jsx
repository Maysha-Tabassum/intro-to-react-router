import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post;
    return (
        <div className='post'>
            <h3>{title}</h3>
            <p>{body}</p>
            <p><Link to={`/post/${id}`}>Post Details</Link></p>
            <button>Show Details</button>
        </div>
    );
};

export default Post;