import mongoose from "mongoose";
const { model, Schema } = mongoose;

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        image: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true,
        collection: "blog"  // Moved to the correct place
    }
);

const Blog = model("blog", blogSchema);
export default Blog;
