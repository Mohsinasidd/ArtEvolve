const express = require('express');
const app = express();
const port = 5000;

//importing routers
const userRouter = require('./router/userRouter');
const exhibitionRouter = require('./router/ExibitionRouter');
const ArtRouter = require('./router/ArtRouter');
const utilRouter = require('./router/utils');

const cors = require('cors');

app.use(cors({
    origin : '*'
}));
// read json data
app.use(express.json());

//adding routers

app.use('/user', userRouter);
app.use('/art', ArtRouter);
app.use('/exhibition', exhibitionRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'));



app.get('/', (req, res) => {
    res.send('Working Perfectly');

});
app.get('/add',(req,res) =>{
    res.send('Response from Add');
})

app.get('/getall')

app.listen( port, () => { console.log('server started!!');});