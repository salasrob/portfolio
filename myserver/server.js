const express = require("express");
const app = express();
const cors = require('cors');

app.listen(4000, () => { console.log('Server Started') })

app.use(express.json());
app.use(cors())
const pdfRouter = require('./routes/resume')
app.use('/resume', pdfRouter)