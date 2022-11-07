import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
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

    '&:hover': {
      Transition: 'all 0.5s',
      backgroundColor: '#202024c9'
    }
  }
})

export const ShoppingCart = styled('div', {
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

  button: {
    border: 'none',
    background: 'none',
    color: '$gray100',
    cursor: 'pointer',

    '&:hover': {
      color: '#d42020',
      transition: 'all 0.2s'
    }
  }
})