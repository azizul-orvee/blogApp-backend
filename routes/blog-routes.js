import express from "express";
import { addBlog, getAllBlogs, udpateBlog } from "../controllers/blog-controller";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post('/add', addBlog)
blogRouter.put("/update/:id",udpateBlog)


export default blogRouter;
