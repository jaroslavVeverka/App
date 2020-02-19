import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import {db} from "./services/db-connection";

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
    try {
        const result = await query();
        res.status(200).json(result[0]);
    } catch (e) {
        res.status(505).json('error ' + e);
    }
});

export async function query() {
    const database = await db;
    return database.execute('SELECT * FROM city LIMIT 1');
}

app.listen(process.env.PORT, () =>
    console.log('Example app listening on port ' + process.env.PORT)
    ,);



