import { type FormEvent, useState } from "react";
import type { FeedbackType } from "..";
import { api } from "../../../service/api";
import { LoadingButton } from "../../LoadingButton";
import { HeaderFeedback } from "../HeaderFeedback";
import { ScreenshotButton } from "../ScreenshotButton";

export interface IFeedbackContinueStep {
  feedbackType: FeedbackType;
  onFeedbackTypeRestartRequest: () => void;
  onFeedbackSent: () => void;
}

export const FeedbackContinueStep = ({
  feedbackType,
  onFeedbackTypeRestartRequest,
  onFeedbackSent,
}: IFeedbackContinueStep) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const handleSubmitFeedback = async (e: FormEvent) => {
    e.preventDefault();
    setIsSendingFeedback(true);
    try {
      await api.post("/feedbacks", {
        type: feedbackType,
        comment,
        screenshot,
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsSendingFeedback(false);
    }
    onFeedbackSent();
  };
  return (
    <>
      <HeaderFeedback
        feedbackType={feedbackType}
        onFeedbackTypeRestartRequest={onFeedbackTypeRestartRequest}
      />
      <form
        onSubmit={handleSubmitFeedback}
        className="my-4 w-full"
      >
        <textarea
          className="w-full min-w-[304px] min-h-[114px] rounded-md text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent focus:outline-none focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(e) => setComment(e.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            disabled={comment.length === 0 || isSendingFeedback}
            className="flex flex-1 justify-center items-center p-2 rounded-md text-sm bg-brand-500 border-transparent hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors duration-500 ease-linear disabled:opacity-50 disabled:bg-brand-500"
            type="submit"
          >
            {isSendingFeedback ? <LoadingButton /> : "Enviar Feedback"}
          </button>
        </footer>
      </form>
    </>
  );
};
