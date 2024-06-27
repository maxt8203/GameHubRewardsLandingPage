import {Schema, model } from "mongoose";

const datesEsquema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        }
    },
    {
        timestamps:true,
        versionKey:false
    }

);

export default model("Dates", datesEsquema);