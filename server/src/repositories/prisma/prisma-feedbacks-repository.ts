import { prisma } from '../../prisma';
import {
	IFeedbacksCreateData,
	IFeedbacksRepository,
} from '../feedbacks-repository';

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
	async create({ type, comment, screenshot }: IFeedbacksCreateData) {
		await prisma.feedback.create({
			data: { type, comment, screenshot },
		});
	}
}
