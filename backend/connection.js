const mongoose = require('mongoose');

const url ='mongodb+srv://mohsinasiddiqui92786:Mohsina123@cluster0.x8i7ksd.mongodb.net/mydatabase?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.error(err);
    
});

module.exports = mongoose;