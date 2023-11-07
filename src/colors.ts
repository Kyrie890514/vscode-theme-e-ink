const colors = {
  black: '#000000',
  white: '#ffffff',
  gray: ['#dddddd', '#b4b4b3']
}

const format = (foreground: string, fontStyle: string) =>
  fontStyle
    ? {
        foreground,
        fontStyle
      }
    : {
        foreground
      }

export default {
  primary: colors.black,
  secondary: colors.gray[1],
  background: colors.white,
  primaryBackground: colors.gray[0],
  foreground: colors.black,
  shadow: colors.white,
  border: colors.black,

  comment: format(colors.gray[0], ''),

  string: format(colors.gray[1], ''),
  regex: format(colors.gray[1], ''),
  number: format(colors.gray[1], ''),
  boolean: format(colors.gray[1], ''),
  undefined: format(colors.gray[1], ''),

  keyword: format(colors.black, 'italic'),

  function: format(colors.black, 'bold'),

  bold: format(colors.black, 'bold'),
  default: format(colors.black, ''),
  gray: format(colors.gray[1], '')
}
