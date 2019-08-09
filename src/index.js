const express = require('express');
const router = require('./routers/router');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log("server is on port", port)
})