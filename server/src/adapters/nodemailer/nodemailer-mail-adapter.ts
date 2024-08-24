import nodemailer from "nodemailer";
import type { IMailAdapter, ISendMailData } from "../mail-adapter";

const { MAIL_HOST, MAIL_PASSWORD, MAIL_PORT, MAIL_USERNAME } = process.env;

export const transport = nodemailer.createTransport({
  host: MAIL_HOST,
  port: Number(MAIL_PORT) || 2525,
  auth: {
    user: MAIL_USERNAME,
    pass: MAIL_PASSWORD,
  },
});

export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail({ subject, body }: ISendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "LeoMSSilva <leo@test.com>",
      subject,
      html: body,
    });
  }
}
