const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Port ${port} is now Active!`);
});

app.get('/', (req, res, next) =>   {
})
