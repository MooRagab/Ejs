import userModel from "../../../../DB/Model/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendEmail } from "../../../services/email.js";

export const getSignup = (req, res) => {
  const errMessage = req.flash("errMessage")[0];
  const oldInputs = req.flash("oldInputs")[0];
  const validationErr = req.flash("validationErr");
  res.render("signup", { errMessage, oldInputs, validationErr });
};

export const signup = async (req, res) => {
  const { userName, email, password } = req.body;

  const user = await userModel.findOne({ email }).select("email");
  if (user) {
    // res.render("signup", { errMessage: "Email Exist" })
    req.flash("errMessage", "Email Exist");
    req.flash("oldInputs", req.body);
    res.redirect("/auth/");
  } else {
    const hash = bcrypt.hashSync(password, parseInt(process.env.SALTROUND));
    const savedUser = await userModel.create({
      userName,
      email,
      password: hash,
    });
    const token = jwt.sign(
      { id: savedUser._id },
      process.env.CONFIRMEMAILTOKEN
    );
    const link = `${req.protocol}://${req.headers.host}/auth/confirmEmail/${token}`;
    const message = `<a href='${link}'>Confirm Email</a>`;
    await sendEmail(savedUser.email, "confirmEmail", message);
    res.redirect("/auth/signin");
  }
};

export const confirmEmail = async (req, res) => {
  const { token } = req.params;
  const decoded = jwt.verify(token, process.env.CONFIRMEMAILTOKEN);
  if (!decoded?.id) {
    res.redirect("/auth/signup");
  } else {
    const user = await userModel.updateOne(
      { _id: decoded.id, confirmEmail: false },
      { confirmEmail: true }
    );
    user ? res.redirect("/auth/signin") : res.redirect("/auth/signup");
  }
};

export const getSignin = (req, res) => {
  const errMessage = req.flash("errMessage")[0];
  const oldInputs = req.flash("oldInputs")[0];
  const validationErr = req.flash("validationErr");
  res.render("signin", { errMessage, oldInputs, validationErr });
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    req.flash("errMessage", "Email Not Exist");
    req.flash("oldInputs", req.body);
    res.redirect("/auth/signin");
  } else {
    if (!user.confirmEmail) {
      req.flash("errMessage", "Confirm your email first");
      req.flash("oldInputs", req.body);
      res.redirect("/auth/signin");
    } else {
      const compare = bcrypt.compareSync(password, user.password);
      if (!compare) {
        req.flash("errMessage", "In-valid Password");
        req.flash("oldInputs", req.body);
        res.redirect("/auth/signin");
      } else {
        req.session.user = {
          _id: user._id,
        };
        // console.log( req.session);
        res.redirect("/user/profile");
      }
    }
  }
};

export const logout = async (req, res) => {
  req.session.destroy();
  res.redirect("/auth/signin");
};
