const express = require('express');
const userRouter = require ('./router/userRouter');
const subscriberRouter = require ('./router/subscriberRouter');
const utilRouter = require ('./router/util');
const cors = require('cors');


const app = express();

const port = 5000;

app.use(express.json());
app.use(cors({origin : [
    'http://localhost:3000'
]}))
app.use('/user',userRouter);
app.use('/util',utilRouter);
app.use('/subscriber',subscriberRouter);

app.use(express.static('./static/resources'));


app.listen( port, () => {
    console.log('server has started');
}

);
