import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "./config/.env") });
import express from "express";
import * as indexRouter from "./src/modules/index.router.js";
import connectDB from "./DB/connection.js";
import session from "express-session";
import mongoSession from "connect-mongodb-session";
import flash from "connect-flash";
import cors from 'cors'

const MongoDBStore = mongoSession(session);

var store = new MongoDBStore({
  uri: process.env.DBURI,
  collection: "mySessions",
}); 
const app = express();
const port = 5000;
app.use(express.static(path.join(__dirname, "./src/views/utlis")));
app.use(express.urlencoded({ extended: true }));
app.use(cors({}))
app.use(
  session({
    secret: process.env.SESSIONSECRET,
    resave: false,
    store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 1, // 1 day
    },
    saveUninitialized: false,
  })
);
app.use(flash());
app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");

app.use("/auth", indexRouter.authRouter);
app.use("/user", indexRouter.userRouter);
app.use("/post", indexRouter.postRouter);
app.use("*", (req, res) => {
  res.status(404).json({ message: "In-valid Routing" });
});

connectDB();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
