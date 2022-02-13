module.exports = {
  purge: ['layouts/**/*.html'],
  content: [
    './src/js/**/*.*',
    './archetypes/**/*.*',
    './data/**/*.*',
    './layouts/**/*.html',
    './static/**/*.*',
  ],
  theme: {
    extend: {
      colors: {
        'acm-blue': {  DEFAULT: '#0182AC',  '50': '#66D9FE',  '100': '#52D4FE',  '200': '#2ACAFE',  '300': '#01BFFD',  '400': '#01A1D5',  '500': '#0182AC',  '600': '#015874',  '700': '#002E3C',  '800': '#000405',  '900': '#000000'},
        "acm-yellow": '#FFD600',
        "acm-orange": '#FC9200',
        'acm-light-blue': {  DEFAULT: '#83CEE2',  '50': '#FFFFFF',  '100': '#FFFFFF',  '200': '#E6F5F9',  '300': '#C5E8F1',  '400': '#A4DBEA',  '500': '#83CEE2',  '600': '#56BCD7',  '700': '#2EA6C6',  '800': '#248099',  '900': '#195A6B'},
        'acm-green': {  DEFAULT: '#A6BC09',  '50': '#EBF984',  '100': '#E7F870',  '200': '#E1F649',  '300': '#DBF422',  '400': '#C8E30B',  '500': '#A6BC09',  '600': '#778606',  '700': '#475104',  '800': '#181B01',  '900': '#000000'},
        "acm-purple": '#65016B',
        "acm-dark-blue": '#09357A'
      },
      fontFamily: {
        'coda': ['"Coda"', 'cursive'],
        'open-sans': ['"Open Sans"', 'sans-serif']
      }
    },
    container: {
      padding: '2rem',
    },
  },
  plugins: [],
}
