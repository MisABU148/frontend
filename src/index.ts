import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// Extend dayjs with relativeTime plugin
dayjs.extend(relativeTime);

document.addEventListener('DOMContentLoaded', () => {
    const comicButton = document.getElementById('comic') as HTMLButtonElement;
    const comicImage = document.getElementById('comicImage') as HTMLImageElement;
    const comicTitle = document.getElementById('comicTitle') as HTMLHeadingElement;
    const comicDate = document.getElementById('comicDate') as HTMLParagraphElement;

    interface ComicProps {
        title: string;
        img: string;
        year: string;
        month: string;
        day: string;
    }

    comicButton.addEventListener('click', async () => {
        const email = 'm.ilyina@innopolis.university';

        const params = new URLSearchParams({ email });
        const idResponse = await fetch(`https://fwd.innopolis.university/api/hw2?${params}`);
        const id = await idResponse.text();

        const comicParams = new URLSearchParams({ id });
        const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?${comicParams}`);
        const comicData: ComicProps = await comicResponse.json();

        comicTitle.textContent = comicData.title;
        comicImage.src = comicData.img;
        comicImage.alt = comicData.title;

        const date = new Date(parseInt(comicData.year), parseInt(comicData.month) - 1, parseInt(comicData.day));
        comicDate.textContent = `Upload: ${dayjs(date).fromNow()}` + ` ${date.toLocaleDateString()}`;
    });
});
