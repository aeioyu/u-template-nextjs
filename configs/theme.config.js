// http://chir.ag/projects/name-that-color/
const colors = {
  bostonBlue: '#428bca',
  stTropaz: '#2a6496',
  maroonFlush: '#c7254e',
  softPeach: '#f9f2f4',
  mantis: '#6ECE5A',
  citrineWhite: '#FBF7DC',
};

const fontFamilies = {
  heading: 'Poppins, Helvetica, Arial, sans-serif',
  body: 'sans-serif',
};

const breakpoints = ['319px', '599px'];

const theme = {
  colors,
  breakpoints,
  fontSizes: ['6rem', '3.75rem', '3rem', '2.125rem', '1.5rem', '1rem', '0.875rem', '0.75rem'],
  textStyles: {
    heading1: {
      fontSize: [0],
      fontWeight: 300,
      lineHeight: '130%',
      fontFamily: fontFamilies.heading,
    },
    heading2: {
      fontSize: [1],
      lineHeight: '130%',
      fontFamily: fontFamilies.heading,
    },
    heading3: {
      fontSize: [2],
      lineHeight: '130%',
      fontFamily: fontFamilies.heading,
    },
    heading4: {
      fontSize: [3],
      lineHeight: '130%',
      fontFamily: fontFamilies.heading,
    },
    heading5: {
      fontSize: [4],
      lineHeight: '130%',
      fontFamily: fontFamilies.heading,
    },
    subHeading: {
      fontSize: [5],
      lineHeight: '140%',
      fontFamily: fontFamilies.body,
    },
    body: {
      fontSize: [6],
      lineHeight: '140%',
      fontFamily: fontFamilies.body,
    },
    caption: {
      fontSize: [7],
      lineHeight: '130%',
      fontFamily: fontFamilies.body,
    },
  },
};

export default theme;
