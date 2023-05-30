const getexhibitionDataById = (id, cb) => {
    fetch('http://localhost:5000/exhibition/getbyid/'+id)
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        cb(data);
    })
    .catch((err) => {
            console.error(err);
    });
};

module.exports = getexhibitionDataById;