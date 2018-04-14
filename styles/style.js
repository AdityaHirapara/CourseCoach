import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  statusBar: {
    height: 24,
    backgroundColor: '#18344a'
  },
  bar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#fff',
    elevation: 0,
    borderBottomWidth: 0.4,
    borderColor: '#b1b1b0',
  },
  titleBar: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
  },
  appTitle: {
    color: '#f79449',
    fontSize: 24,
    paddingTop: 3,
    paddingLeft: 20,
    fontWeight: '300',
  },
  main: {
    position: 'relative',
    top: 80,
    left: 0,
    right: 0,
    paddingTop: 10,
    marginBottom: 90,
    backgroundColor: '#f2f2f2',
  },
  heading: {
    marginLeft: 15,
    fontSize: 18,
    color: '#868682',
    fontWeight: '100',
  },
  logo: {
    height: 45,
    width: 45,
    marginRight: 10,
    marginTop: 5,
    justifyContent: 'center',
  },
  banner: {
    height: 160,
  },
  linkContainer: {
    flexDirection: 'row',
  },
  links: {
    paddingTop: 15,
    paddingLeft: 5,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 5,
    paddingTop: 50,
  },
  menuHeaderBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 150,
  },
  menuHeaderOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  menuHeaderText: {
    fontSize: 30,
    color: '#fff',
    backgroundColor: 'transparent',
  },
  menuTag: {
    fontSize: 14,
    color: '#fff',
    paddingLeft: 78,
    paddingBottom: 20,
    top: -24,
  },
  menuButtonContainer: {
    position: 'relative',
    top: 5,
    left: 10,
  },
  menuButton: {
    width: 35.5,
    height: 28.5,
  },
  menulink: {
    fontSize: 18,
    color: '#fff',
    paddingLeft: 4,
  },
  linkicon: {
    position: 'relative',
    top: -4,
    left: 0,
    height: 32,
    width: 32,
  },
  menutab: {
    padding: 5,
    paddingLeft: 14,
    paddingBottom: 2,
    flexDirection: 'row',
  },
  card: {
    margin: 15,
    paddingBottom: 10,
    alignItems: 'center',
    elevation: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  scard: {
    width: 180,
  },
  bcard: {
    flex: 1,
    height: 220,
  },
  small: {
    height: 120,
    width: 176,
  },
  big: {
    height: 180,
  },
});
