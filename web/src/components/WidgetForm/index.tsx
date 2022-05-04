import { FeedbackContentStep } from '@/components/WidgetForm/Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from '@/components/WidgetForm/Steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from '@/components/WidgetForm/Steps/FeedbackTypeStep';
import { feedbackTypes } from '@/constants/feedback-types';
import { useState } from 'react';

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestartFeedback = () => {
    setFeedbackSent(false);
    setFeedbackType(null);
  };

  return (
    <div className=" bg-zinc-900  p-4  relative  rounded-2xl  mb-4  flex  flex-col  items-center  shadow-lg  w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestart={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestart={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por{' '}
        <a
          className="underline underline-offset-2"
          href="https://github.com/jtiagosantos">
          Tiago Santos
        </a>
      </footer>
    </div>
  );
};
