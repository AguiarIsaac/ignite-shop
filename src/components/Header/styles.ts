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

  span: {
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
  }
})