import { roles } from "../../middlewear/auth.js";

export const endPoint = {
  addPost: [roles.Admin, roles.User],
};
