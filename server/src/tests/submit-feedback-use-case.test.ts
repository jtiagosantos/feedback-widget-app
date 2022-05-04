import { SubmitFeedbackUseCase } from '../use-cases/submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendEmail: sendEmailSpy },
);

describe('Submit fedback tests', () => {
  it('should be able to submit a feedback', async () => {
    const useCase = submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,example-image.jpg',
    });

    await expect(useCase).resolves.not.toThrow();

    expect(createFeedbackSpy).toBeCalled();

    expect(sendEmailSpy).toBeCalled();
  });

  it('should not be able to submit a feedback without type', async () => {
    const useCase = submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,example-image.jpg',
    });

    await expect(useCase).rejects.toThrow('Type is required.');
  });

  it('should not be able to submit a feedback without comment', async () => {
    const useCase = submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,example-image.jpg',
    });

    await expect(useCase).rejects.toThrow('Comment is required.');
  });

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    const useCase = submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'example-image.jpg',
    });

    await expect(useCase).rejects.toThrow('Invalid screenshot format.');
  });
});
