import userModel from "../../../../DB/Model/User.model.js"
import cloudinary from "../../../services/cloudinary.js"


export const getProfile = (req, res) => {

    res.render("profile")
}


export const profilePic = async (req, res) => {

    if (!req.file) {
        req.flash("imageRequired", 'image Required')
        res.redirect("/auth/profile")
    } else {
        const { secure_url } = await cloudinary.uploader.upload(req.file.path, { folder: "EJSProfile" })
        await userModel.updateOne({ _id: req.user._id }, { profilePic: secure_url })
        res.redirect("/user/profile")
    }
}