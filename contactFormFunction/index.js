const nodemailer = require('nodemailer');
/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.contactFormRequest = async (req, res) => {
  try {
    res.set('Access-Control-Allow-Origin', process.env.APP_DOMAIN);
    res.set('Access-Control-Allow-Credentials', 'true');
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    if (req.method === 'OPTIONS') {
      return res.status(204).send('');
    }
    const { subject, message, email, name } = req.body;
    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
    const mailOpts = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject,
      text: `Email: ${email}; Name: ${name}; Message: ${message}`,
    };
    await smtpTrans.sendMail(mailOpts);
    return res.status(200).send({ subject, message, email, name });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
