import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Photo from '../Photo/Photo';

const Photos = () => {
    const photos = useLoaderData();
    // console.log(photos);
    return (
        <div>
            <h3>All the photos are here: {photos.length} </h3>
            <div>
                {
                    photos.map(photo => <Photo
                        key={photo.id}
                        photo={photo}
                    ></Photo>)
                }
            </div>
        </div>
    );
};

export default Photos;