import React from 'react';
import Image from 'next/image';

const Hobbies: React.FC = () => (
    <div className="block_info">
        <h3>Hobbies:</h3>
        <div className="image-hob">
            <Image src="../../public/images/tennis_img.jpg" alt="Tennis" />
            <Image src="../../public/images/mafia_img.jpg" alt="Mafia" />
            <Image src="../../public/images/train_img.webp" alt="Train" />
        </div>
    </div>
);

export default Hobbies;
