import express from "express";
import { addBlog, deleteBlog, getAllBlogs, getById, udpateBlog } from "../controllers/blog-controller";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post('/add', addBlog)
blogRouter.put("/update/:id",udpateBlog)
blogRouter.get("/:id",getById)
blogRouter.delete("/:id",deleteBlog)
blogRouter.get('/user/:id')


export default blogRouter;
