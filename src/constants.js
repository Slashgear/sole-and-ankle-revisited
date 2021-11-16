export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
    phoneMin: 600,
    tabletMin: 950,
    laptopMin: 1300,
}
export const QUERIES = {
    phoneMin: `(min-width: ${BREAKPOINTS.phoneMin / 16}rem)`,
    tabletMin: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
    laptopMin: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
}
