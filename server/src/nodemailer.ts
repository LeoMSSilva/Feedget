import nodemailer from 'nodemailer';

const { MAIL_HOST, 	MAIL_USERNAME, 	MAIL_PASSWORD	 } = process.env;

export const transport = nodemailer.createTransport({
	host: MAIL_HOST,
	port: 2525,
	auth: {
		user: MAIL_USERNAME,
		pass: MAIL_PASSWORD,
	},
});
