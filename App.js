import React, {useState} from 'react';
import ShoppingList from './components/ShoppingList';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC'
  },
});

const App = () => {
  return (
    <View style={styles.view}>
      <ShoppingList />
    </View>
  );
};

export default App;
