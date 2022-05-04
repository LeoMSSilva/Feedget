import { prisma } from './prisma';
import express from 'express';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
	const { type, comment, screenshot } = req.body;

	const feedback = await prisma.feedback.create({
		data: { type, comment, screenshot },
	});
	return res.status(201).json({ data: feedback });
});
