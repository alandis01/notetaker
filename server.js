const express = require('express');
const PORT = 3001;
const app = express();

app.get('/', (req, res) => {
res.send("Hello Class");
});

app.listen(PORT);