export function themes(vue){
  return [{
      alias: vue.$t('book.themeDefault'),
      name: 'Default',
      style: {
        body: {
          'color': '#4c5059',
          'background': '#cecece',
        },
        '.epubjs-hl': {
          'fill': 'red',
          'fill-opacity': '0.3',
          'mix-blend-mode': 'multiply'
        }
      }
    },
    {
      alias: vue.$t('book.themeGold'),
      name: 'Gold',
      style: {
        body: {
          'color': '#5c5b56',
          'background': '#c6c2b6',
        },
        '.epubjs-hl': {
          'fill': 'red',
          'fill-opacity': '0.3',
          'mix-blend-mode': 'multiply'
        }
      }
    },
    {
      alias: vue.$t('book.themeEye'),
      name: 'Eye',
      style: {
        body: {
          'color': '#404c42',
          'background': '#a9c1a9',
        },
        '.epubjs-hl': {
          'fill': 'red',
          'fill-opacity': '0.3',
          'mix-blend-mode': 'multiply'
        }
      }
    },
    {
      alias: vue.$t('book.themeNight'),
      name: 'Night',
      style: {
        body: {
          'color': '#cecece',
          'background': '#000000',
        },
        '.epubjs-hl': {
          'fill': 'red',
          'fill-opacity': '0.3',
          'mix-blend-mode': 'multiply'
        }
      }
    }
  ]
}
