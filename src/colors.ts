const colors = {
  pink: ['#ff8ad4', '#ff69b4'],
  purple: ['#ffa1ff', '#ed60ed'],
  blue: ['#a2e8ff', '#00bfff'],
  green: ['#63ffa9', '#00ff7f'],
  yellow: ['#ffffb0', '#ffff00'],
  white: ['#ffffff'],
  black: ['#333333', '#4e4f47'],
  red: ['e0115f']
}

export default {
  colors,
	// todo ...colors
  themes: {
    foreground: colors.black[0],
    secondaryForeground: colors.black[1],
    background: colors.white[0],
    border: [colors.pink[0], colors.pink[1]],
    primary: [colors.pink[0], colors.pink[1]],
    error: colors.red[0]

    // activeForeground: ['#bfbaaa', '#4e4f47'],
    // secondaryForeground: ['#dedcd590', '#393a3490'],
    // ignored: ['#dedcd550', '#393a3450'],
    // faded: ['#dedcd510', '#393a3410'],

    // activeBackground: ['#181818', '#f7f7f7'],

    // lowBackground: ['#222', '#F1F0E9'],
    // lowActiveBackground: ['#292929', '#E7E5DB'],
    // lowBorder: ['#252525', '#E7E5DB'],

    // comment: ['#758575dd', '#a0ada0'],
    // string: ['#c98a7d', '#b56959'],
    // variable: ['#bd976a', '#b07d48'],
    // keyword: ['#4d9375', '#1e754f'],
    // number: ['#4C9A91', '#2f798a'],
    // boolean: ['#4d9375', '#1e754f'],
    // operator: ['#cb7676', '#ab5959'],
    // function: ['#80a665', '#59873a'],
    // constant: ['#c99076', '#a65e2b'],
    // class: ['#7f8ac7', '#5a6aa6'],
    // interface: ['#5d99a9', '#2e808f'],
    // type: ['#5DA994', '#2e8f82'],
    // builtin: ['#cb7676', '#ab5959'],
    // property: ['#b8a965', '#998418'],
    // namespace: ['#db889a', '#b05a78'],
    // punctuation: ['#666666', '#999999'],
    // decorator: ['#bd8f8f', '#bd8f8f'],
    // regex: ['#c4704f', '#ab5e3f'],
  }
}
