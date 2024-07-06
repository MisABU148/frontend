import React from 'react';
import Image from 'next/image';

const Photo: React.FC = () => {
    return (
        <div id="photo">
            <Image src="/frontend/images/my_photo.jpg" alt="My Photo" width={600} height={1200}/>
        </div>
    );
};

export default Photo;
