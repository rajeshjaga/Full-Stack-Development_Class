import express, { urlencoded } from 'express';
import cors from 'cors';
import mongoogse from 'mongoogse';

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

mongoogse.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Schema = mongoogse.Schema()
const contact = new Schema({
    "contactId": String,
    "name": String,
    "phone": Number,
    "email": String,
    "address": String,
    "label": String,
})
const db = mongoogse.connection;
app.get("/", (req, res) => {

})

app.listen(port, () => {
    console.log("app is runnning at port 3000");
})
