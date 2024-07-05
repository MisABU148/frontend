import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => (
    <footer>
        <hr />
        <div className="footer">
            <a href="https://t.me/abu_blood"><Image src="../../public/images/tg_img.png" alt="Telegram" /></a>
            <a href="https://github.com/MisABU148"><Image src="../../public/images/gh_img.png" alt="GitHub" /></a>
            <a href="mailto:maashaainn@gmail.com"><Image src="../../public/images/gmail_png.png" alt="Gmail" /></a>
            <a href="https://innopolis.university/"><p>&copy; m.ilyina@innopolis.university</p></a>
        </div>
    </footer>
);

export default Footer;
