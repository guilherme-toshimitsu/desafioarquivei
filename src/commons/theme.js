const theme = {
  colors: {
    main: "#006eb9",
    secondary: "#32a3d5",
    text: "#78838b",
    error: "#e5195f",
    success: "#2e7d32",
    disabled: "#808080",
  },
};

const points = {
  xs: "600px",
  sm: "960px",
  lg: "1280px",
  xl: "1920px",
};

const breakpoints = {
  sm: `@media (max-width: ${points.xs})`,
  md: `@media (max-width: ${points.sm})`,
  lg: `@media (max-width: ${points.lg})`,
  xl: `@media (max-width: ${points.xl})`,
};

export default theme;
export { breakpoints, points };
