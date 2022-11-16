import { styled } from "@stitches/react";

export const ItemCartElement = styled('div', {
  display: 'flex',
  gap: '1.25rem',

  strong: {
    color: '$green300'
  },

  p: {
    color: '$gray300'
  },

  button: {
    width: '30%',
    // margin: '0 auto',
    color: '$green500',
    border: 'none',
    background: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
      color: '#d42020',
      transition: 'all 0.2s'
    }
  },

  '.details': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    
    '.quantity': {
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',

      '.controls': {
        display: 'flex',
        alignItems: 'center',

        '#add': {
          '&:hover': {
            color: '$green300'
          }
        }
      }
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 101,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',


  img: {
    objectFit: 'cover',
  }
});