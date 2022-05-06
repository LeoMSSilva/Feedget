import { NodemailerMailAdapter } from '../adapters/nodemailer/nodemailer-mail-adapter';
import { IFeedbacksRepository } from '../repositories/feedbacks-repository';

export interface ISubmitFeedbackUseCaseRequest {
	type: string;
	comment: string;
	screenshot?: string;
}

export class SubmitFeedbackUseCase {
	constructor(
		private feedbacksRepository: IFeedbacksRepository,
		private mailAdapter: NodemailerMailAdapter,
	) {}

	async execute(request: ISubmitFeedbackUseCaseRequest) {
		const { type, comment, screenshot } = request;

		if (!type) {
			throw new Error('Type is required.');
		}

		if (!comment) {
			throw new Error('Comment is required.');
		}

		if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
			throw new Error('Invalid screenshot format.');
		}

		await this.feedbacksRepository.create({ type, comment, screenshot });
		await this.mailAdapter.sendMail({
			subject: 'Novo Feedback',
			body: [
				`<div style="font-family: sans-serif; font-size:16px; color: #111;">`,
				`<p>Tipo do feedback: ${type}</p>`,
				`<p>Comentário: ${comment}</p>`,
				screenshot ? `<img src="${screenshot}" alt="Imagem do feedback"/>` : ``,
				`</div>`,
			].join('\n'),
		});
	}
}
