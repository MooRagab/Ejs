# EJS CRUD 

## Description

 A comprehensive CRUD system designed to empower users to seamlessly manage their content. This web application leverages the power of [Express](https://www.npmjs.com/package/express) and [MongoDB](https://www.mongodb.com/) to provide a robust platform for user registration, content creation, and dynamic interaction.
## Dependencies

List of external packages and libraries your project depends on:

- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Library for hashing passwords.
- [cloudinary](https://www.npmjs.com/package/cloudinary) - Cloud storage for images and videos.
- [connect-flash](https://www.npmjs.com/package/connect-flash) - Flash messages middleware.
- [connect-mongodb-session](https://www.npmjs.com/package/connect-mongodb-session) - MongoDB session store for Express.
- [dotenv](https://www.npmjs.com/package/dotenv) - Loads environment variables from a `.env` file.
- [EJS](https://www.npmjs.com/package/ejs) - Embedded JavaScript templating.
- [express](https://www.npmjs.com/package/express) - Web application framework for Node.js.
- [express-session](https://www.npmjs.com/package/express-session) - Session middleware for Express.
- [joi](https://www.npmjs.com/package/joi) - Object schema validation.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - JSON Web Token implementation.
- [mongoose](https://www.npmjs.com/package/mongoose) - MongoDB object modeling for Node.js.
- [multer](https://www.npmjs.com/package/multer) - Middleware for handling `multipart/form-data`, used for file uploads.
- [nodemailer](https://www.npmjs.com/package/nodemailer) - Module for sending emails.

Please make sure to install these dependencies using the following command:

```bash
npm install
```
## Features
- **User Authentication:** Begin by creating a secure account through the signup route at `localhost:5000/auth/`. Passwords are hashed using [bcryptjs](https://www.npmjs.com/package/bcryptjs), enhancing overall user security.

![image](https://github.com/MooRagab/Ejs/assets/79729746/6d853cf4-e5f3-4258-bd14-6a9f2e3789dd)


- **Email Confirmation:** After signup, users receive a confirmation email through [Nodemailer](https://www.npmjs.com/package/nodemailer). This ensures that only verified users can log in, maintaining a secure user base.

  ![image](https://github.com/MooRagab/Ejs/assets/79729746/9ff86bea-37c2-463c-a66f-e53ff591ceba)

- **Dashboard Customization:** Upon login at `localhost:5000/auth/signin`, users access a personalized dashboard powered by [Express](https://www.npmjs.com/package/express) (a web application framework for Node.js) and [EJS](https://www.npmjs.com/package/ejs). Here, they can customize their account, including adding a profile picture.

![image](https://github.com/MooRagab/Ejs/assets/79729746/ba0d5cc3-987e-4cc2-b2f0-59b2fdd96a12)

- **Post Creation:** Seamlessly navigate to the posts page at `localhost:5000/post/` using [Express](https://www.npmjs.com/package/express). [Multer](https://www.npmjs.com/package/multer) and [Cloudinary](https://www.npmjs.com/package/cloudinary) handle multimedia uploads, allowing users to share images, videos, or GIFs in their posts.

- **Post Management:** Users have the ability to update and delete their own posts from the dashboard. This functionality is facilitated by [mongoose](https://www.npmjs.com/package/mongoose), enabling efficient interaction with the MongoDB database.

 ![image](https://github.com/MooRagab/Ejs/assets/79729746/d6bc0e71-42fe-4429-be88-8fee9f1fcceb)

- **News Feed:** On the posts page, users can explore and interact with posts from other users. This dynamic community experience is facilitated by [Express](https://www.npmjs.com/package/express) and [EJS](https://www.npmjs.com/package/ejs), providing real-time updates.

- **Secure Signout:** The dashboard includes a signout button powered by [Express](https://www.npmjs.com/package/express) sessions, ensuring a secure logout process.

- **Customized Styling:** The aesthetic appeal of [Your Project Name] is crafted using [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), creating an engaging and user-friendly interface.

- **Model-View-Controller (MVC) Architecture:** Follow the MVC architecture for better organization and scalability, ensuring a clean separation of concerns in your project structure.


