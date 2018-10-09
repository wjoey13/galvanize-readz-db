const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
const queries = require('./queries');


app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Port ${port} is now Active!`);
});

app.get('/', (req, res, next) =>   {
    queries.allAuthors().then(result => { res.send({data: result})})
});

app.get('/:id', (req,res) => {
    queries.indiBooks(req.params.id).then(result => { res.send({data: result})})
} );

app.get('/:id/:id', (req,res) => {
    queries.indiAuthors(req.params.id).then(result => { res.send({data: result})})
} );

app.post('/', (req, res) => {
    queries.createAuthor(req.body).then((data) => {
    res.json({data});
    });
});

app.put('/:id', (req,res) =>   {
    queries.updateBooks(req.body, req.params.id).then(itemData => res.json({data: itemData}))
});
