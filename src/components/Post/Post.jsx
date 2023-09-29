import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const navigate = useNavigate()
    const { id, title, body } = post;
    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h3>Id: {id}</h3>
            <h3>{title}</h3>
            <p>{body}</p>
            <p><Link to={`/post/${id}`}>Post Details</Link></p>
            <Link to={`/post/${id}`}><button className='btn'>Show Details</button></Link>
            <button className='btn' onClick={handleNavigate}>With event Handler</button>
        </div>
    );
};

export default Post;