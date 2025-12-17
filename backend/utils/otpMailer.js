const nodemailer = require('nodemailer');

async function sendMail(to, message) {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,     // replace with your Gmail
        pass: process.env.EMAIL_PASS,        // use Gmail App Password
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: "verification otp [do not share]",
      // text: message,
      html: `<h3><b>Skylark OTP</b></h3>
            <h1 style="text-align:center;">[${message}]</h1>` // optional HTML version
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.response);
    return info; // return result if needed
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    throw error; // rethrow so caller can handle it
  }
}

module.exports = sendMail;