const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
const CONNECTDB = require('./Database/connect');
const ProductRoute = require('./router/products');
const AuthRoute = require('./router/user');
const UserRoute = require('./router/useDetail');


const PORT = process.env.PORT || 5000;


//Database connection
CONNECTDB(process.env.MONGO_URL);


//middlewares
app.use(express.json());
app.use('/api/v1/products',ProductRoute);
app.use('/api/v1/auth',AuthRoute);
app.use('/api/v1/users',UserRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

//server listener 

app.listen( PORT, () => {
    console.log(`server is listening to port ${PORT}`);
})