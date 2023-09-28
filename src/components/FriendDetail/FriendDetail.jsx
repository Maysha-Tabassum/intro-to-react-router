import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetail.css'

const FriendDetail = () => {
    const friend = useLoaderData();

    console.log(friend)
    return (
        <div className='friend-detail'>
            <h2>These are all the details of this person.</h2>
            <h3>{friend.name}</h3>
            <p>phone: {friend.phone}</p>
            <p>email: {friend.email}</p>
            <p>username: {friend.username}</p>
            <p>website: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;