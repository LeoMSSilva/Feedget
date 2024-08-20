export interface IFeedbacksCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface IFeedbacksRepository {
  create: (data: IFeedbacksCreateData) => Promise<void>;
}
