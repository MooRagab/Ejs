
import { Schema, model, Types } from "mongoose";


const postSchema = new Schema({
    title: { type: String, required: true },
    caption: { type: String,required: true },
    userId: { type: Types.ObjectId, required: true, ref: 'User' },
    image: { type: String, required: true },
}, {
    timestamps: true
})

const postModel = model('Post', postSchema)

export default postModel