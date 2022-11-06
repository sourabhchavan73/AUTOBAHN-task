import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  textField: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    input: {
      color: 'white',
    },
  },

  formGroup: {
    marginBottom: '25px',
  },

  formTitle: {
    display: 'inline-block',
    padding: '16px 0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: 500,
    fontSize: '18px',
  },

  inputText: {
    fontSize: '0.5em',
    color: 'rgba(0, 0, 0, 0.85)',
  },
}));
