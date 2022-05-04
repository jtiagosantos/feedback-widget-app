import { CloseButton } from '@/components/CloseButton';
import { FeedbackType } from '@/components/WidgetForm';
import { ScreenshotButton } from '@/components/WidgetForm/ScreenshotButton';
import { feedbackTypes } from '@/constants/feedback-types';
import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestart: () => void;
  onFeedbackSent: () => void;
}

export const FeedbackContentStep: React.FC<FeedbackContentStepProps> = ({
  feedbackType,
  onFeedbackRestart,
  onFeedbackSent,
}) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const {
    title,
    image: { source, alt },
  } = feedbackTypes[feedbackType];

  const handleSubmitFeedback = (event: FormEvent) => {
    event.preventDefault();

    console.log({
      screenshot,
      comment,
    });

    onFeedbackSent();
  };

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestart}>
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={source} alt={alt} className="w-6 h-6" />
          {title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:outline-none focus:ring-brand-500 focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={!comment}>
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
};
