export const ImageAPI = (() => {
    const production = 'https://nullspender.herokuapp.com';
    const development = 'http://localhost:3000'
    const getPopularImages = async () => {
        const url = `${production}/getPopularImages`
        let images = await fetch(url);
        let imageList = await images.json();
        return imageList;
    }
    
    const getQueriedImages = async (query) => {
        const url = `${production}/searchImages?query=${query}`
        let images = await fetch(url);
        let imageList = await images.json();
        return imageList;
    }
    
    const getCertainImage = async (id) => {
        let url = `${production}/searchCertainImage`
        let settings = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id: id})
        };
        let image = await fetch(url, settings)
        let imageObj = await image.json();
        return imageObj;
    }

    return {
        getPopularImages,
        getQueriedImages,
        getCertainImage,
    }
})()

