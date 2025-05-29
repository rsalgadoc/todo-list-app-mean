// dbConfig.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';
     


export async function connect() {
    try {
        //const res = await mongoose.connect('mongodb://172.31.13.246:27017/myapp');

        dotenv.config(); // Load variables from .env
        const username = process.env.MONGO_USER;
        const password = process.env.MONGO_PASSWORD;
        const host = process.env.MONGO_HOST;
        const database = process.env.MONGO_DATABASE;
        const uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${host}/${encodeURIComponent(database)}?retryWrites=true&w=majority`;
        const res = await mongoose.connect(uri);
        
        console.log("DB Connected >>>");
    } catch (err) {
        console.log(err);
    }
}

connect();