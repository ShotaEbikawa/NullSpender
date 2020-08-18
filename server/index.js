const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
global.fetch = fetch;
dotenv.config();
const path = require('path');
const compression = require('compression');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const PORT = process.env.PORT || 3000;
const UPPER_LIMIT = 20;
const CLIENT_ASSETS_PATH  = path.join(__dirname, '../dist/resources');
const CLIENT_PATH = path.join(__dirname, '../dist');
// create new instance of unsplash
const unsplash = new Unsplash({
    accessKey: process.env.API_KEY,
    secret: process.env.SECRET_KEY,
});

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use('/resources', express.static(CLIENT_ASSETS_PATH));

app.get('/', (req, res) => {
    res.sendFile(path.join(CLIENT_PATH, 'index.html'));
})

app.get('/saved-images', (req, res) => {
    res.sendFile(path.join(CLIENT_PATH, 'saved-images.html'));
})

app.get('/search-result', (req, res) => {
    res.sendFile(path.join(CLIENT_PATH, 'search-result.html'));
})

app.get('/getPopularImages', (req,res) => {
    unsplash.photos.listPhotos(1,UPPER_LIMIT,"popular")
        .then(toJson)
        .then(json => {
            res.send(json);
        })
        .catch(err => console.log(err));
});

app.get('/downloadImage', (req,res) => {
    unsplash.photos.getPhoto("mtNweauBsMQ")
        .then(toJson)
        .then(json => {
        res.send({unsplash: unsplash, image: json})
        })
        .catch(err => console.log(err));
})

app.get('/searchImages', (req,res) => {
    const query = req.query.query;
    unsplash.search.photos(query, 1, UPPER_LIMIT, {orientation: "portrait"})
        .then(toJson)
        .then(json => {
            console.log(json.results)
            res.send(json.results);
        })
        .catch(err => console.log(err));
})

app.post('/searchCertainImage', (req, res) => {
    const id = req.body.id;
    unsplash.photos.getPhoto(id)
        .then(toJson)
        .then(json => {
            console.log(json);
            res.send(json);
        })
        .catch(err => console.log(err));
})

app.listen(PORT, () => { console.log(`server listening on port ${PORT}`)});