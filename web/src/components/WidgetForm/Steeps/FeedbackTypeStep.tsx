import { type FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface IFeedbackTypeStep {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export const FeedbackTypeStep = ({
  onFeedbackTypeChanged,
}: IFeedbackTypeStep) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6 flex items-center gap-2">
          Deixe seu feedback
        </span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            className="py-5 w-24 flex flex-1 flex-col items-center gap-2 rounded-lg bg-zinc-800 outline-none border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            type="button"
            key={key}
          >
            <img
              src={value.image.url}
              alt={value.image.alt}
            />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};
