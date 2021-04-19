const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const signuproute = require('./routes/user-route');



const URI = 'mongodb://localhost:27017/imgurbackend';

const app = express();


const main = async () => {

    try {
        mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })

        const db = mongoose.connection

        await db.on('open', () => console.log('DATABASE CONNECTED.....'));


        const PORT = 5000;
        app.listen(PORT, (err) => {
            if (err)
                console.log(err);
            else
                console.log(`server is listening on port ${PORT}....`);

        });


    } catch (err) {

        console.log(`the error is ${err.message}`);

    }

};

main();

//basic route '/'
app.get('/', (req, res) => {
    res.status(200).send('hello welcome to imgur backend milestone');
});

//application middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev')); //logger middleware


//middlewares
app.use('/user', signuproute);