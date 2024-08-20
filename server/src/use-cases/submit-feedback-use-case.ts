import type { NodemailerMailAdapter } from "../adapters/nodemailer/nodemailer-mail-adapter";
import type { IFeedbacksRepository } from "../repositories/feedbacks-repository";

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
      throw new Error("Type is required.");
    }

    if (!comment) {
      throw new Error("Comment is required.");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format.");
    }

    await this.feedbacksRepository.create({ type, comment, screenshot });
    const body = [
      "<center>",
      `<p style="font-family: sans-serif; text-align: justify; max-width: 600px; font-size: 20px; color: #000; font-weight: bold; ">#${type}: </p>`,
      `${comment
        .split("\n")
        .map(
          (line) =>
            `<p style="font-family: sans-serif; text-align: justify; max-width: 600px; font-size: 16px; color: #111;">${line}</p>`,
        )
        .join("\n")
        .replace("</p>,", "")}`,
      "</center>",
      screenshot
        ? `
				<center>
					<img
						alt="Imagem do feedback"
						style="max-width:600px !important; width: 100% !important; height="auto" display: block; border: 0px; margin: 0px;"
						src="${screenshot}"
					/>
				</center>
				`
        : "",
    ].join("\n");
    await this.mailAdapter.sendMail({
      subject: "Novo Feedback",
      body,
    });
  }
}
