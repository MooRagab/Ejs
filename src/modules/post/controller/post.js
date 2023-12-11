import postModel from "../../../../DB/Model/Post.model.js";
import cloudinary from "../../../services/cloudinary.js";

export const getPost = async (req, res) => {
  const errMessage = req.flash("errMessage")[0];
  const oldInputs = req.flash("oldInputs")[0];
  // const validationErr = req.flash("validationErr");
  const posts = await postModel.find();
  res.render("newsFeed", { errMessage, oldInputs, posts });
};

export const addPost = async (req, res) => {
  // console.log(req.file);
  if (!req.file) {
    req.flash("errMessage", "Image Is Required");
    req.flash("oldInputs", req.body);
    res.redirect("/post");
  } else {
    const { title, caption } = req.body;
    const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
      folder: "PostEJS",
    });
    const post = await postModel.create({
      title,
      caption,
      userId: req.user._id,
      image: secure_url,
    });
    if (!post.title) {
      req.flash("errMessage", "Title Is Required");
    } else {
      if (!post.caption) {
        req.flash("errMessage", "Caption Is Required");
      } else {
        res.redirect("/post");
      }
    }
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await postModel.findOneAndDelete({
    _id: id,
    userId: req.user._id,
  });
  res.redirect("/post");
};

export const getPostByIDToUpdate = async (req, res) => {
  const { id } = req.params;
  const errMessage = req.flash("errMessage")[0];
  const oldInputs = req.flash("oldInputs")[0];
  const post = await postModel.findById({ _id: id });
  res.render("updatePost", { post, errMessage, oldInputs });
};
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, caption } = req.body;
  const post = await postModel.findById(id);
  if (!post) {
    res.redirect("/post");
  } else {
    let imageURl;
    if (!req.file) {
      imageURl = post.image;
    } else {
      const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
        folder: "PostEJS",
      });
      imageURl = secure_url;
    }

    const post = await postModel.updateOne(
      { _id: id, userId: req.user._id },
      { title, caption, image: imageURl }
    );
    res.redirect("/post");
  }
};
