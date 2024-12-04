const express = require('express');
const userRouter = require ('./router/userRouter');
const subscriberRouter = require ('./router/subscriberRouter');
const utilRouter = require ('./router/util');
const cors = require('cors');


const app = express();

const port = 5000;

app.use(express.json());

app.use(cors());

app.use('/user',userRouter);
app.use('/util',utilRouter);
app.use('/subscriber',subscriberRouter);

app.use(express.static('./static/resources'));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
<<<<<<< HEAD

=======
>>>>>>> 6b0d9d9809d94ff0ae66d6b0d1c61919fff9cc03

app.listen( port, () => {
    console.log('server has started....');
    
}

);
