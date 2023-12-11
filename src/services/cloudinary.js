import  cloudinary from 'cloudinary'
import path from 'path' 
import {fileURLToPath}  from 'url'
const __dirname =  path.dirname(fileURLToPath(import.meta.url))
import dotenv  from 'dotenv'
dotenv.config({path:path.join(__dirname ,  '../../config/.env')})
// console.log({cl:process.env.CLOUD_NAME});
cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key:  process.env.API_KEY,
    api_secret:  process.env.API_SECRET,
    secure: true
});

export default cloudinary.v2
