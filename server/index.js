const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const fetch = require('node-fetch');
global.fetch = fetch;
dotenv.config();
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const PORT = 3000;

// create new instance of unsplash
const unsplash = new Unsplash({
    accessKey: process.env.API_KEY,
    secret: process.env.SECRET_KEY,
});

app.use(cors());

app.get('/getPopularImages', (req,res) => {
    unsplash.photos.listPhotos(1,12,"popular")
        .then(toJson)
        .then(json => {
            res.send(json);
        })
});

app.get('/downloadImage', (req,res) => {
    unsplash.photos.getPhoto("mtNweauBsMQ")
    .then(toJson)
    .then(json => {
      console.log(unsplash.photos.downloadPhoto);
      res.send({unsplash: unsplash, image: json})
    });
})

app.get('/searchImages', (req,res) => {
    const query = req.query.query;
    console.log(query)
    unsplash.search.photos(query,1, 12, {orientation: "portrait"})
    .then(toJson)
    .then(json => {
        console.log(json)
        res.json(json)
    })
    .catch(err => console.log(err));
})


app.listen(PORT, () => { console.log(`server listening on port ${PORT}`)});