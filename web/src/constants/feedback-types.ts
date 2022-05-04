import bugImageUrl from '../assets/bug.svg';
import ideiaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'imagem de um inseto',
    },
  },
  IDEIA: {
    title: 'Ideia',
    image: {
      source: ideiaImageUrl,
      alt: 'imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'imagem de um balão de pensamento',
    },
  },
};
