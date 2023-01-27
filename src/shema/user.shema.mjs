import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserShema = new Schema({
    username: {type: String, unique: true,required: true},
    password: {type: String, required: true},
    roles: [{type: String, ref: 'Role'}]
})

export const User = mongoose.model('User', UserShema);