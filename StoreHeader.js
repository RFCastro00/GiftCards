import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';

const StoreHeader = () => {
  return (
    <LinearGradient
      colors={['purple', 'white']}
      style={styles.headerContainer}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <Text style={styles.headerText}>Store</Text>
      <TouchableOpacity style={styles.questionMarkButton}>
        <MaterialCommunityIcons
          name="help-circle-outline"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  questionMarkButton: {
    // Add styles for question mark button here
  },
});

export default StoreHeader;
