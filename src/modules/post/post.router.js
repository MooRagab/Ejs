import { Router } from "express";
import { auth } from "../../middlewear/auth.js";
import { fileValidation, HME, myMulter } from "../../services/multer.js";
import * as postController from "./controller/post.js";
import { endPoint } from "./post.endPoint.js";
import { validation } from "../../middlewear/validation.js";
import * as validator from "./post.validation.js";

const router = Router(); 

router.get("/", postController.getPost);
router.post(
  "/",
  auth(endPoint.addPost),
  myMulter(fileValidation.image).single("image"),
  HME("/post"),
  postController.addPost
);
router.get("/:id/delete", auth(endPoint.addPost), postController.deletePost);
router.get(
  "/:id/getPostToUpdate",
  auth(endPoint.addPost),
  postController.getPostByIDToUpdate
);
router.post(
  "/:id/update",
  auth(endPoint.addPost),
  myMulter(fileValidation.image).single("image"),
  HME("/post"),
  postController.updatePost
);

export default router;
