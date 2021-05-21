import React from 'react';
import {StyleSheet, Text, View , TextInput, Button} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goals" style={styles.input}/> 
        <Button title="ADD "/>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    color: "black",
    width: "80%"
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  }
});

export default App;
