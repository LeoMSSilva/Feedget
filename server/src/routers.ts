import { prisma } from './prisma';
import { transport } from './nodemailer';
import express from 'express';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
	const { type, comment, screenshot } = req.body;

	const feedback = await prisma.feedback.create({
		data: { type, comment, screenshot },
	});

	await transport.sendMail({
		from: 'Equipe Feedget <oi@feedget.com>',
		to: 'LeoMSSilva <leo@test.com>',
		subject: 'Novo feedback',
		html: [
			`<div style="font-family: sans-serif; font-size:16px; color: #111;">`,
			`<p>Tipo do feedback: ${type}</p>`,
			`<p>Comentário: ${comment}</p>`,
			`</div>`,
		].join('\n'),
	});

	return res.status(201).json({ data: feedback });
});