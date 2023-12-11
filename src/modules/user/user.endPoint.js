import { roles } from "../../middlewear/auth.js";



export const endPoint  =  {
    profile:[roles.Admin, roles.Hr , roles.User]
}