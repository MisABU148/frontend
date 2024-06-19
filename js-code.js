const fetchComic = document.getElementById('fetchComic');
fetchComic.addEventListener('click', async () => {
    const email = 'm.ilyina@innopolis.university';

    const comicImage = document.getElementById('comicImage');
    const param_resp = new URLSearchParams({ email });
    const idResponse = await fetch(`https://fwd.innopolis.university/api/hw2?${param_resp}`);
    const id = await idResponse.text();
    const param_comic = new URLSearchParams({id});
    const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?${param_comic}`);
    const comicData = await comicResponse.json();
    comicTitle.textContent = comicData.title;
    comicImage.src = comicData.img;
    fetchComic.textContent = '';

    const date = new Date(comicData.year, comicData.month - 1, comicData.day);
    comicDate.textContent = `Upload: ${date.toLocaleDateString()}`;
});
