import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PhotoDetail.css'

const PhotoDetail = () => {
    const navigate = useNavigate();
    const photo = useLoaderData();
    const handleNavigate =()=>{
        navigate(-1);
    }
    // console.log(photo);
    return (
        <div>
            <h3>PHotoDEtails</h3>
            <p>{photo.title}</p>
            <img src={photo.url} alt="" />
            <button className='btn' onClick={handleNavigate}>Go Back</button>
        </div>
    );
};

export default PhotoDetail;