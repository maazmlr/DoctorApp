import express from 'express'
import cors from 'cors'
import mongoose from './db/index.js';
import router from './routes/index.js';

const app = express()
const PORT = process.env.port || 3000;


app.use(express.json())
app.use(cors());


app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("This page is Routed")
  })

 

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log('db connected')
})
app.use('/',router)

app.listen(PORT, () => {
    console.log('port is', PORT)
})

