const bounce = (x: number, height: number) => {
  x = ((3 * Math.PI) / 4) * (x / 100);
  return height * Math.exp(-x) * Math.abs(Math.cos(-4 * x + Math.PI / 2));
};

export { bounce };
