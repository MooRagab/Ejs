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
- [ejs](https://www.npmjs.com/package/ejs) - Embedded JavaScript templating.
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
- **User Authentication:** Start by creating an account through the secure signup route at `localhost:5000/auth/`. User passwords are hashed using [bcryptjs](https://www.npmjs.com/package/bcryptjs) for enhanced security.

![image](https://github.com/MooRagab/Ejs/assets/79729746/6d853cf4-e5f3-4258-bd14-6a9f2e3789dd)

- **Email Confirmation:** After signup, users receive a confirmation email to the provided address. Only after confirming the email can users log in, ensuring a verified and secure user base.

- **Dashboard Customization:** Upon login at `localhost:5000/auth/login`, users access a personalized dashboard where they can add a profile picture to enhance their account.

- **Post Creation:** From the dashboard, users can seamlessly navigate to the posts page at `localhost:5000/post/`, where they can add multimedia-rich posts, including images, videos, or GIFs.

- **Post Management:** Users have the ability to update and delete their own posts from the dashboard, providing control over their content.

- **News Feed:** On the posts page, users can explore and interact with posts from other users, fostering a vibrant and connected community.

- **Secure Signout:** The dashboard includes a signout button, ensuring a secure logout process.



