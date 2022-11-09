import { Divide } from "phosphor-react";
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

export const ContentCard = styled('div', {
  marginTop: '4.5rem',
  height: '82vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '.itensCart': {
    marginTop: '2rem'
  },

  '.item': {
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
    }
  },

  '.details': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
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