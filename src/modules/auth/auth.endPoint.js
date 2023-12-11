import { roles } from "../../middlewear/auth.js";

export const endPoint = {
  logout: [roles.Admin, roles.Hr, roles.User],
};
