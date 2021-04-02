
const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5000;
var app_path = 'myapp/dist/myapp';

app.use('/', express.static(path.join(__dirname, app_path)))

app.listen(PORT, () => { console.log('Server Started') })

app.use(express.json());
app.use(cors())
const pdfRouter = require('./routes/resume')
app.use('/resume', pdfRouter)