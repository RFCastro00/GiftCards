import React from 'react';
import {View, Text, Image} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import styles from './Styles/AppStyle';
const App = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#D16FF8', '#7969FF']} // Assuming these are your gradient colors
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.header}>
        <Image
          source={require('./Images/back_button.png')}
          style={styles.backbutton}
        />
        <Text style={styles.headerText}>Store</Text>
        <Image
          source={require('./Images/question_mark.png')}
          style={styles.questionMark}
        />
      </LinearGradient>
      <View style={styles.buttonContainer}>
        <View style={styles.diamondButton}>
          <Text style={styles.diamondText}>Diamonds</Text>
        </View>
        <View style={styles.coinButton}>
          <Text style={styles.coinText}>Coins</Text>
        </View>
      </View>
      <View style={styles.giftCardContainer}>
        <View style={styles.giftCardRow}>
          <Image
            source={require('./Images/GiftCard1.png')}
            style={styles.giftCardImage}
          />
        </View>
        <View style={styles.giftCardRow}>
          <Image
            source={require('./Images/GiftCard2.png')}
            style={styles.giftCardImage}
          />
        </View>
        <View style={styles.giftCardRow}>
          <Image
            source={require('./Images/GiftCard3.png')}
            style={styles.giftCardImage}
          />
        </View>
        <View style={styles.giftCardRow}>
          <Image
            source={require('./Images/GiftCard4.png')}
            style={styles.giftCardImage}
          />
        </View>
        <View style={styles.giftCardRow}>
          <Image
            source={require('./Images/GiftCard5.png')}
            style={styles.giftCardImage}
          />
        </View>
      </View>
    </View>
  );
};

export default App;
