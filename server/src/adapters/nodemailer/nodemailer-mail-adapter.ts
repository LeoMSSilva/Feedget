import { IMailAdapter, ISendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';

const { MAIL_HOST, MAIL_USERNAME, MAIL_PASSWORD } = process.env;

export const transport = nodemailer.createTransport({
	host: MAIL_HOST,
	port: 2525,
	auth: {
		user: MAIL_USERNAME,
		pass: MAIL_PASSWORD,
	},
});

export class NodemailerMailAdapter implements IMailAdapter {
	async sendMail({ subject, body }: ISendMailData) {
		await transport.sendMail({
			from: 'Equipe Feedget <oi@feedget.com>',
			to: 'LeoMSSilva <leo@test.com>',
			subject,
			html: body,
		});
	}
}
