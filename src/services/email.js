import nodemailer from "nodemailer";

export async function sendEmail(dest, subject, message, attachments = []) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILEREMAIL, // generated ethereal user
      pass: process.env.NODEMAILERPASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Ragab" <${process.env.NODEMAILEREMAIL}>`, // sender address
    to: dest, // list of receivers
    subject, // Subject line
    html: message,
    attachments,
  });
//   console.log(info);
}
