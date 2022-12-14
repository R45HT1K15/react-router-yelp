const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));




const PORT = 3100
app.listen(PORT, () => {
    console.log(`The server is ranning on PORT ${PORT}`)
})