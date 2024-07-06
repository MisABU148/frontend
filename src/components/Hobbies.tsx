import React from 'react';
import Image from 'next/image';

const Hobbies: React.FC = () => (
    <div className="block_info">
        <h3>Hobbies:</h3>
        <div className="image-hob">
            <Image src="/images/tennis_img.jpg" alt="Tennis" width={500} height={250}/>
            <Image src="/images/mafia_img.jpg" alt="Mafia" width={500} height={250}/>
            <Image src="/images/train_img.webp" alt="Train" width={500} height={250}/>
        </div>
    </div>
);

export default Hobbies;
