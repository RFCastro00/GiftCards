import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row', // Maintain row layout for horizontal placement
    alignItems: 'flex-end', // Align items vertically in the center
    padding: 10,
    height: 80,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 140,
    flex: 1, // Center the text horizontally using flex
  },
  questionMark: {
    width: 30, // Adjust width as needed
    height: 30, // Adjust height as needed
  },
  backbutton: {
    width: 30, // Adjust width as needed
    height: 30, // Adjust height as needed
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  diamondText: {
    fontSize: 16,
    color: '#5C3AAC',
    fontWeight: 'bold',
    borderBottomColor: '#5C3AAC', // Color of the border
    borderBottomWidth: 2, // Thickness of the border
    padding: 5,
  },
  coinText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    padding: 5, // Add padding for better separation
  },
  giftCardContainer: {
    flex: 1,
    backgroundColor: '#EBEBF5',
  },
  giftCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute images evenly
  },
  giftCardImage: {
    marginTop: 15,
    flex: 1, // Occupy full width and height of the container (row)
    resizeMode: 'cover', // Stretch image to cover the container
    maxHeight: 75,
    maxWidth: 400,
  },
});

export default styles;
