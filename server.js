const express = require('express')
const path = require('path')
const app = express();

let users = {
    "names": ["userOne", "userTwo", "userThree", "userFour", "manu"]
}

app.use(express.static(path.join(__dirname, "/parkspace-client/build")));

app.get("/api", (req, res) => {
    res.send(users);
})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/parkspace-client/build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started at port 5000")
});