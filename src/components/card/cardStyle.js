import { makeStyles } from '@mui/styles';
import { PARA_COLOR, TITLE_COLOR, LINK_COLOR } from '../../utils/colorUtilis';

export const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    width: '100%',
  },

  cardStyle: {
    border: '1px solid #f0f0f0',
    background: '#fff',
    minHeight: '14em',
    display: 'flex',
    flexDirection: 'column',
  },

  cardHead: {
    minHeight: '48px',
    marginBottom: '-1px',
    padding: '0 24px',
    color: TITLE_COLOR,
    fontWeight: 500,
    fontSize: '16px',
    background: 'transparent',
    borderBottom: ' 1px solid #f0f0f0',
    borderRadius: '2px 2px 0 0',
  },

  cardTitle: {
    display: 'inline-block',
    padding: '16px 0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  cardBody: {
    padding: '24px',
    color: PARA_COLOR,
    fontSize: '14px',
  },

  paraStyle: {
    marginBottom: '1rem',
    lineHeight: 1.8,
  },

  cardFooter: {
    marginTop: 'auto',
    padding: '24px',
  },

  cardFooterText: {
    color: LINK_COLOR,
    cursor: 'pointer',
    fontSize: '0.9em',
  },
}));
