import { type FeedbackType, feedbackTypes } from ".";
import { BackButton } from "../BackButton";
import { CloseButton } from "../CloseButton";

export interface IHeaderFeedback {
  feedbackType: FeedbackType;
  onFeedbackTypeRestartRequest: () => void;
}

export const HeaderFeedback = ({
  feedbackType,
  onFeedbackTypeRestartRequest,
}: IHeaderFeedback) => {
  const feedbackTypeInfos = feedbackTypes[feedbackType];
  return (
    <header>
      {feedbackTypeInfos && (
        <BackButton goBack={onFeedbackTypeRestartRequest} />
      )}
      <span className="text-xl leading-6 flex items-center gap-2">
        {feedbackTypeInfos && (
          <img
            className="w-6 h-6"
            src={feedbackTypeInfos.image.url}
            alt={feedbackTypeInfos.image.alt}
          />
        )}
        {feedbackTypeInfos.title}
      </span>
      <CloseButton />
    </header>
  );
};
