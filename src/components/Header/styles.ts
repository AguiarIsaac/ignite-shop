import { styled } from '@stitches/react';

export const HeaderComponent = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    backgroundColor: '$gray800',
    padding: '0.75rem',
    borderRadius: 8,
    color: '$gray300',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',

    '&:hover': {
      Transition: 'all 0.5s',
      backgroundColor: '#202024c9'
    }
  },

  '#counter': {
    position: 'absolute',
    top: '-6px',
    right: '-6px',
    background: '$green500',
    color: '$gray300',
    fontWeight: 'bold',
    padding: '0.25rem',
    borderRadius: '50%',
    width: '1.5rem',
    height: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border:'2px solid $gray900'
  }
})

export const ShoppingCartStyles = styled('div', {
  position: 'absolute',
  zIndex: 1,
  background: '$gray800',
  top: 0,
  right: 0,
  width: '30rem',
  minHeight: '100vh',
  padding: '3rem',
  display: 'none',

  '&.active': {
    display: 'initial',
  },

  '#close': {
    border: 'none',
    background: 'none',
    color: '$gray100',
    cursor: 'pointer',
    position: 'absolute',
    right: '3rem',

    '&:hover': {
      color: '#d42020',
      transition: 'all 0.2s'
    }
  },

  '.checkoutCart': {
    button: {
      marginTop: '3.4rem',
      padding: '1.25rem',
      width: '100%',
      borderRadius: 4,
      border: 'none',
      cursor: 'pointer',
      background: '$green500',
      color: '$gray100',
      fontWeight: 'bold',
      fontSize: '$md',

      '&:hover': {
        background: '$green300',
        transition: 'all 0.2s'
      }
    }
  }
})