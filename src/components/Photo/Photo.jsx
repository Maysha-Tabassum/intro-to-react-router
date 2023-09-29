import React from 'react';
import './Photo.css'
import { Link, useNavigate } from 'react-router-dom';

const Photo = ({ photo }) => {
    const navigate = useNavigate();
    const { id, title, thumbnailUrl } = photo;
    const handleNavigate = () => {
        navigate(`/photo/${id}`);
    }
    return (
        <div className='photo'>
            <p>{title}</p>
            <img src={thumbnailUrl} alt="" />
            <p><Link to={`/photo/${id}`}>Photo detail</Link></p>
            <Link to={`/photo/${id}`}><button className='btn'>Show more details</button></Link>
            <button className='btn' onClick={handleNavigate}>With Event Handler</button>
        </div>
    );
};

export default Photo;