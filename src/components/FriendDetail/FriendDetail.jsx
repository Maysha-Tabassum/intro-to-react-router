import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './FriendDetail.css'

const FriendDetail = () => {
    const navigate = useNavigate();
    const friend = useLoaderData();
    const handleNavigate = () => {
        navigate(-1);
    }
    console.log(friend)
    return (
        <div className='friend-detail'>
            <h2>These are all the details of this person.</h2>
            <p>Id: {friend.id}</p>
            <h3>{friend.name}</h3>
            <p>phone: {friend.phone}</p>
            <p>email: {friend.email}</p>
            <p>username: {friend.username}</p>
            <p>website: {friend.website}</p>
            <button className='btn' onClick={handleNavigate}>Go Back</button>
        </div>
    );
};

export default FriendDetail;