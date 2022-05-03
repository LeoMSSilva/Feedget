import { useState } from 'react';
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from './Steeps/FeedbackTypeStep';
import { FeedbackContinueStep } from './Steeps/FeedbackContinueStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      url: bugImageUrl,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      url: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      url: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const handleRestartFeedback = () => setFeedbackType(null);
  return (
    <div className="flex flex-col items-center relative p-4 mb-4 rounded-2xl bg-zinc-900 shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContinueStep
          feedbackType={feedbackType}
          onFeedbackTypeRestartRequest={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por&nbsp;
        <a
          className="underline underline-offset-2"
          href="https://github.com/LeoMSSilva"
        >
          LeoMSSilva
        </a>
      </footer>
    </div>
  );
};
