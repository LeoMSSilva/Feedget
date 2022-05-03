import { useState } from 'react';
import { feedbackTypes } from '..';
import { HeaderFeedback, IHeaderFeedback } from '../HeaderFeedback';
import { ScreenshotButton } from '../ScreenshotButton';

export const FeedbackContinueStep = ({
  feedbackType,
  onFeedbackTypeRestartRequest,
}: IHeaderFeedback) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  return (
    <>
      <HeaderFeedback
        feedbackType={feedbackType}
        onFeedbackTypeRestartRequest={onFeedbackTypeRestartRequest}
      />
      <form className="my-4 w-full">
        <textarea
          className="w-full min-w-[304px] min-h-[114px] rounded-md text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent focus:outline-none focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            className="flex flex-1 justify-center items-center p-2 rounded-md text-sm bg-brand-500 border-transparent hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors duration-500 ease-linear"
            type="submit"
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  );
};
