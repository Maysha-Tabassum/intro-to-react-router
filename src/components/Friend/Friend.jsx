import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';
import './/Friend.css'

const Friend = ({ friend }) => {
    console.log(friend);
    const { id, name, phone, email } = friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <span><Link to={`/friend/${id}`}>Show all details</Link></span>
        </div>
    );
};

export default Friend;