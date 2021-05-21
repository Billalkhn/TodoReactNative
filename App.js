import React, {useState} from 'react';
import {StyleSheet, Text, View , TextInput, Button} from 'react-native';

const App = () => {
  const [goalEntered , setGoalEntered] = useState('');
  const [goalList , setGoalList] = useState([]);


  const inputHAndler = (text) => {
        setGoalEntered(text)
  }

  const addGoalHandler = () => {
       setGoalList(currentGoals => [...currentGoals , goalEntered])
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          onChangeText={inputHAndler}
          value= {goalEntered}
        />
        <Button title="ADD " onPress={addGoalHandler}/>
      </View>
      <View>
        {goalList.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
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
