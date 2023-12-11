import { Router } from "express";
import { auth } from "../../middlewear/auth.js";
import { validation } from "../../middlewear/validation.js";
import { endPoint } from "./auth.endPoint.js";
import * as validators from "./auth.validation.js";
import * as registerController from "./controller/registration.js";
const router = Router();
 
//get signup page as FrontEnd
router.get("/", registerController.getSignup);
router.post(
  "/signup",
  validation(validators.signup, "/auth/"),
  registerController.signup
);
//confirmEmail
router.get("/confirmEmail/:token", registerController.confirmEmail);

//signin
router.get("/signin", registerController.getSignin);
router.post(
  "/signin",
  validation(validators.signin, "/auth/signin"),
  registerController.signin
);

router.get("/logout", auth(endPoint.logout), registerController.logout);

export default router;
