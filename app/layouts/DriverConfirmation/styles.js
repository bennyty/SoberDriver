import { StyleSheet } from 'react-native';

//Stylesheet for specifying component layout and visuals
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#72EB90',
  },
  header:{
    fontSize: 16,
    fontWeight: "600"
  },
  eventInfo: {
    fontSize: 20,
    fontWeight: "bold"
  },
  submit: {
    backgroundColor: '#FFC900',
    padding: 10,
  },
  footer: {
    fontSize: 16,
    fontWeight: "400"
  }
});
