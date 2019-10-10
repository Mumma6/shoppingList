import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

const styles = StyleSheet.create({
  greets: {
    color: '#303030',
    fontSize: 46,
    fontWeight: 'bold',
    padding: 10,
  },
  names: {
    color: '#303030',
    fontSize: 25,
    padding: 10,
  },
  item: {
    backgroundColor: '#98FB98',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 32,
  },
});

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const generateId = () => {
    return Math.floor(Math.random() * 1000);
  };

  const buttonPress = () => {
    if (input === '') {
      alert('Please enter an item');
    } else {
      setItems([...items, {title: input, id: generateId()}]);
      setInput('');
    }
  };

  const remove = id => {
    setItems(items.filter(t => t.id !== id));
  };

  return (
    <View>
      <Text style={styles.greets}>Shopping List!</Text>
      <TextInput
        style={{height: 100}}
        placeholder="Enter item..."
        value={input}
        onChangeText={input => setInput(input)}
      />
      <Button title="Add" onPress={buttonPress} />

      <FlatList
        data={items}
        renderItem={({item}) => (
          <View>
            <Text style={styles.item}>{item.title}</Text>
            <Button
              color="#DC143C"
              title="Remove"
              onPress={() => remove(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ShoppingList;
