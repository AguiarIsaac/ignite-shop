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

    '&:hover': {
      Transition: 'all 0.5s',
      backgroundColor: '#202024c9'
    }
  }
})