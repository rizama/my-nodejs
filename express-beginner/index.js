const express = require('express');
const router = require('./router');
const app = express();

const port = 3000;

// Routes
app.get('/', (req, res) => {
        res.send('Hello World')
    })
    
// With Router
app.use(router);

app.listen(port, () => console.log(`Server Run On Port ${port}`));