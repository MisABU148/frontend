"use client"
import React, { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface ComicProps {
    title: string;
    img: string;
    year: string;
    month: string;
    day: string;
}

const Comic: React.FC = () => {
    const [comicTitle, setComicTitle] = useState('');
    const [comicImage, setComicImage] = useState('');
    const [comicDate, setComicDate] = useState('');

    const fetchComic = async () => {
        try {
            const email = 'm.ilyina@innopolis.university';

            const idResponse = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
            const id = await idResponse.text();

            const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
            const comicData: ComicProps = await comicResponse.json();

            setComicTitle(comicData.title);
            setComicImage(comicData.img);

            const date = new Date(parseInt(comicData.year), parseInt(comicData.month) - 1, parseInt(comicData.day));
            setComicDate(`Upload: ${dayjs(date).fromNow()} ${date.toLocaleDateString()}`);
        } catch (error) {
            console.error('Error fetching comic:', error);
        }
    };

    return (
        <div className="comic-part">
            <button onClick={fetchComic}>Click to see a comic!</button>
            <h2>{comicTitle}</h2>
            {comicImage && <img src={comicImage} alt={comicTitle} />}
            <p>{comicDate}</p>
        </div>
    );
};

export default Comic;
