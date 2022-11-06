import { makeStyles } from '@mui/styles';
import {
  PRIMARY_COLOR,
  NAV_MENU_COLOR,
  BG_PRIMARY_COLOR,
} from '../../utils/colorUtilis';

export const useStyles = makeStyles((theme) => ({
  navItem: {
    marginBottom: '8px',
    marginTop: '8px',
    color: NAV_MENU_COLOR,
    height: '40px',
  },

  menuTitle: {
    fontSize: '14px',
  },

  brandTitle: {
    marginBottom: '0.5em',
    padding: '20px 0 0',
    fontWeight: 600,
    fontSize: '30px',
    lineHeight: 1.35,
  },

  brandText: {
    color: PRIMARY_COLOR,
    outline: ' none',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },

  navbar: {
    backgroundColor: BG_PRIMARY_COLOR,
    height: '100%',
  },
}));
