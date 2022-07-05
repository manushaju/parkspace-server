const express = require('express')
const path = require('path')
const app = express();

let users = {
    "names": ["userOne", "userTwo", "userThree", "userFour", "shaju"]
}

let page2 = {
    "hello": [1,2,3,4,5,6,7,8,9],
};

app.use(express.static(path.join(__dirname, "/parkspace-client/build")));

app.get("/api", (req, res) => {
    res.send(users);
})

app.get("/pages", (req,res) => {
    res.send(page2);
})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/parkspace-client/build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started at port 5000")
});