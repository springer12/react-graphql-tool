export default (theme: Object) => ({
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    width: '70vw',
    maxWidth: 530,
  },
  content: {
    width: '100%',
    flex: '1 1 auto',
    position: 'relative',
    boxSizing: 'border-box',
    padding: 20,
    marginTop: 30,
    backgroundColor: theme.palette.neutrals.background,
  },
  checkmarkContainer: {
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -18,
    left: 'calc(50% - 35px)',
    height: 70,
    width: 70,
    backgroundColor: theme.palette.neutrals.background,
    zIndex: theme.zIndex.tooltip,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.neutrals.mainText,
    fontSize: 29,
    fontWeight: 600,
    margin: '61px 0 11px 0',
  },
  subheader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.neutrals.mainText,
    fontSize: 15,
    fontWeight: 400,
    marginBottom: 27,
  },
  buttons: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: '0 3.5px 20px 3.5px',
    width: 210,
  },
});
