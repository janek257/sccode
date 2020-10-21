const React = require('react-native');
const {Dimensions, Platform} = React;

export default {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rect: {
    width: 200,
    height: 200,
    backgroundColor: 'tomato',
  },
  box: {
    backgroundColor: 'tomato',
    width: 200,
    height: 200,
  },
  textStyle: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
  card: {
    borderBottomColor: '#666666',
    borderBottomWidth: 1,
    backgroundColor: '#d9dcdb',
  },
  card1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#666666',
    borderBottomWidth: 1,
  },
  ColStyle: {
    width: '48%',
    height: '20%',
  },
  RowStyle: {
    marginLeft: '8%',
    width: '100%',
    height: '100%',
  },
};
