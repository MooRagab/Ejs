import joi from "joi";

export const addPost = {
  body: joi.object().required().keys({
    title: joi.string().required(),
    caption: joi.string().email().required(),
    image: joi.string().required(),
  }),
};
