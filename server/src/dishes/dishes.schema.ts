import * as mongoose from 'mongoose';

export const DishSchema = new mongoose.Schema({
    name: String,
    day: String,
    quantity: Number,
    price: Number,
    slot: Array
});