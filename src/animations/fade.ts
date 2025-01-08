const fadeUp = (y: number) => {
  return {
    initial: {
      y: y,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  }
};

export { fadeUp };

