const express = require('express');
const app = express();

//importing routers
const userRouter = require('./router/userRouter');
const cors = require('cors');

app.use(cors({
    origin : ['http://localhost:3000']
}));
// read json data
app.use(express.json());

//adding routers

app.use('/user', userRouter);

const port = 5000;

app.get('/', (req, res) => {
    res.send('Working Perfectly');

});
app.get('/add',(req,res) =>{
    res.send('Response from Add');
})

app.get('/getall')

app.listen( port, () => { console.log('server started!!');});