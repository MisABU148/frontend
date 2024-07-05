import React from 'react';
import Image from 'next/image';

const Photo: React.FC = () => {
    return (
        <div id="photo">
            <Image src="../../public/images/my_photo.jpg" alt="My Photo"/>
        </div>
    );
};

export default Photo;
