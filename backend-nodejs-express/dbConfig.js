// dbConfig.js

import mongoose from 'mongoose';

export async function connect() {
    try {
        const res = await mongoose.connect('mongodb://172.31.13.246:27017/myapp');
        console.log("DB Connected >>>");
    } catch (err) {
        console.log(err);
    }
}

connect();