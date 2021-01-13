const express = require('express');
const app = express();
const port = 4000;
app.set("view engine", "ejs");
const profileRouter = require('./router/profile');
const articleRouter = require('./router/article');
app.get('/', (req, res) => res.send('ini home'));
app.use('/profile', profileRouter);
app.use('/article', articleRouter);

app.listen(port, () => console.log(`this app run in port : ${port}`));

