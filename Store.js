import React, {useState} from 'react';
import styles from './AppStyle';
import {View, Text, Button, StyleSheet} from 'react-native';

const Store = () => {
  const [selectedButton, setSelectedButton] = useState('Diamonds');

  const handlePress = buttonName => {
    setSelectedButton(buttonName);
  };

  const buttonStyles = buttonName => {
    return selectedButton === buttonName
      ? styles.selectedButton
      : styles.unselectedButton;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Store</Text>
        <Button title="?" onPress={() => {}} style={styles.questionMark} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Diamonds"
          onPress={() => handlePress('Diamonds')}
          style={buttonStyles('Diamonds')}
        />
        <Button
          title="Coins"
          onPress={() => handlePress('Coins')}
          style={buttonStyles('Coins')}
        />
      </View>
    </View>
  );
};

export default Store;
