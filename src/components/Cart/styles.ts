import { styled } from "@stitches/react";

export const ContentCart = styled('div', {
  marginTop: '4.5rem',
  height: '82vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '.itensCart': {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem'
  },

  '.item': {

  },



  '.purchaseDetails': {
    display: 'flex',
    gap: '0.5rem',
    flexDirection: 'column',

    span: {
      display: 'flex',
      justifyContent: 'space-between',

      p: {
        color: '$gray300',
        fontSize: 16
      },

      strong: {
        color: '$gray100'
      },

      '#total': {
        fontSize: '$lg'
      }
    }
  },
})

export const CartEmpy = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  marginTop: '6rem'
})