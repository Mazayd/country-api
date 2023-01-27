import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    value: {type: String, unique: true, default: 'USER'},
})

export const Role = mongoose.model('Role', RoleSchema);
