import express from "express";
import PostController from "../controller/PostController";

export const postRouter = express.Router();

postRouter.post("/create", PostController.createPost);
postRouter.get("/:id", PostController.getPostById);
postRouter.get("/feed", PostController.getFeed);
postRouter.get("/feed/:type", PostController.getPostsByType);