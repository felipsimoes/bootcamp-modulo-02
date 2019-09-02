export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PASS,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Felipe Castro <noreply@gobarber.com>',
  },
};
