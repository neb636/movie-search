const FALLBACK_GRADIENTS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(to top, #ff0844 0%, #ffb199 100%)',
  'linear-gradient(60deg, #abecd6 0%, #fbed96 100%)',
  'linear-gradient(-60deg, #ff5858 0%, #f09819 100%)',
  'linear-gradient(to top, #4481eb 0%, #04befe 100%)',
  'linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%)',
  'linear-gradient(-225deg, #7085B6 0%, #87A7D9 50%, #DEF3F8 100%)'
];

export const useRandomFallbackGradient = () => {
  return FALLBACK_GRADIENTS[Math.floor(Math.random() * FALLBACK_GRADIENTS.length)];
};
