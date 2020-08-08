export const getPopularImages = async () => {
    const url = 'http://localhost:3000/getPopularImages'
    let images = await fetch(url);
    let imageList = await images.json();
    return imageList;
}

export const getQueriedImages = async (query) => {
    const url = `http://localhost:3000/searchImages?query=${query}`
    let images = await fetch(url);
    let imageList = await images.json();
    return imageList;
}

export const getCertainImage = async (id) => {
    let url = 'http://localhost:3000/searchCertainImage'
    let settings = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id: id})
    };
    let image = await fetch(url, settings)
    let imageObj = await image.json();
    return imageObj;
}
