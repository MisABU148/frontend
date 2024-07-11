import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import '../styles/style.css';

dayjs.extend(relativeTime);

interface ComicProps {
    title: string;
    img: string;
    year: string;
    month: string;
    day: string;
}

interface ComicPageProps {
    comicTitle: string;
    comicImage: string;
    comicDate: string;
}

const Comic: React.FC<ComicPageProps> = ({ comicTitle, comicImage, comicDate }) => (
    <div className='comic-part'>
        <Head>
            <title>{comicTitle} - Comic</title>
            <meta name="description" content={`Read the comic titled "${comicTitle}"`} />
        </Head>
        <h2>{comicTitle}</h2>
        {comicImage && <Image src={comicImage} alt={comicTitle} width={500} height={400} />}
        <p>{comicDate}</p>
        <Link href="/">
            <button>View Resume</button>
        </Link>
    </div>
);

export const getServerSideProps = async () => {
    const email = 'm.ilyina@innopolis.university';

    const idResponse = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
    const id = await idResponse.text();

    const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
    const comicData: ComicProps = await comicResponse.json();

    const date = new Date(parseInt(comicData.year), parseInt(comicData.month) - 1, parseInt(comicData.day));

    return {
        props: {
            comicTitle: comicData.title,
            comicImage: comicData.img,
            comicDate: `Upload: ${dayjs(date).fromNow()} ${date.toLocaleDateString()}`
        }
    }
}

export default Comic;
