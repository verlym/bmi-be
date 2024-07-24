const express = require('express');
const bmiRoutes = require('./src/routes/bmiRoutes');
var cors = require('cors');


const app = express();
const port = 3000;

app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api/bmi', bmiRoutes);

app.listen(port, () => {
    console.log(`BMI Calculator API running on port ${port}`);
});