require('dotenv').config();
const express = require('express');
const app = express();
const { sequelize } = require('./db');

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

const port = 3000;

const post = require('./controllers/Post');
app.use("/post", post);

const auth = require('./controllers/Auth');
app.use("/auth", auth);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});