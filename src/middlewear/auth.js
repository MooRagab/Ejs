import userModel from "../../DB/Model/User.model.js"


export const roles = {
    Admin: "Admin",
    Hr: "HR",
    User: "User",

}

export const auth = (accessRoles = []) => {
    return async (req, res, next) => {
        // console.log(accessRoles);
        if (!req?.session?.user) {
            req.flash("errMessage","not login user")
            res.redirect("/auth/signin")
        } else {
            const user = await userModel.findById(req.session.user._id).select("userName email profilePic role")
            if (!user) {
                req.flash("errMessage","register user")
                res.redirect("/auth/")
            } else {
                // console.log(user.role);
                // console.log(accessRoles.includes(user.role));
                if (!accessRoles.includes(user.role)) {
                    req.flash("errMessage","not Auth user") 
                    res.redirect("/auth/signin")
                } else {
                    req.user = user
                    next()
                }
            }
        }
    }

}