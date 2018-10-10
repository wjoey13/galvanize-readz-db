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

app.get('/author', (req, res, next) =>   {
    queries.allAuthors().then(result => { res.send({data: result})})
});
app.get('/books', (req, res, next) =>   {
    queries.allBooks().then(result => { res.send({data: result})})
});

app.get('/:id', (req,res) => {
    queries.indiBooks(req.params.id).then(result => { res.send({data: result})})
} );

app.get('/:id/:id', (req,res) => {
    queries.indiAuthors(req.params.id).then(result => { res.send({data: result})})
} );

app.post('/author', (req, res) => {
    queries.createAuthor(req.body).then((data) => {
    res.json({data});
    });
});

app.post('/books', (req, res) => {
    queries.createBook(req.body).then((data) => {
    res.json({data});
    });
});

app.put('/:id', (req,res) =>   {
    queries.updateAuthor(req.body, req.params.id).then(itemData => res.json({data: itemData}))
});

app.put('/:id', (req,res) =>   {
    queries.updateBook(req.body, req.params.id).then(itemData => res.json({data: itemData}))
});

app.delete('/author/:id', (req, res) => {
    queries.deleteAuthor(req.params.id).then((data) =>    {
        res.json({data})
    });
});

app.delete('/books/:id', (req, res) => {
    queries.deleteBook(req.params.id).then((data) =>    {
        res.json({data})
    });
});
