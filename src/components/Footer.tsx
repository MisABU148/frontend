import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => (
    <footer>
        <hr />
        <div className="footer">
            <a href="https://t.me/abu_blood"><Image src="/frontend/images/tg_img.png" alt="Telegram" width={40} height={50}/></a>
            <a href="https://github.com/MisABU148"><Image src="/frontend/images/gh_img.png" alt="GitHub" width={40} height={50}/></a>
            <a href="mailto:maashaainn@gmail.com"><Image src="/frontend/images/gmail_png.png" alt="Gmail" width={40} height={50}/></a>
            <a href="https://innopolis.university/"><p>&copy; m.ilyina@innopolis.university</p></a>
        </div>
    </footer>
);

export default Footer;
