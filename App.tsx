import React, {useState} from 'react';
import {StyleSheet, Text, View, Button,TextInput} from 'react-native';

const HelloWorldApp = () => {
  const [name, setName] = useState("Prasant");
  const [person,setPerson] = useState({name:'Nisant',age:27});

  const clickHandler = () =>{
    setName("Memika")
    setPerson({name:'Prasant',age:33})
  }
  return (
    <View style = {styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>{name} Pant</Text>
        <Text style={styles.boldText}>{person.name} is of {person.age}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text >Enter Name:</Text>
        <TextInput 
        multiline
        style = {styles.input}
        placeholder='e.g John Wick'
        textAlign='center'
        onChangeText={(value) => setName(value)} />

      <Text >Enter Age:</Text>
        <TextInput 
        keyboardType='number-pad'
        style = {styles.input}
        placeholder='e.g 24'
        textAlign='center'
        onChangeText={(val) => setPerson({...person, age: parseInt(val)})} />
      </View>
      {/* <View style={[styles.header, styles.gap]}>
        <Text style={styles.boldText}>Is Going To Hell</Text>
      </View> */}
      <View style={styles.buttonContainer}>
        <Button title='Update Name' onPress={clickHandler} />
      </View>
    </View>
  );
};
export default HelloWorldApp;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subContainer:{
    alignItems:'center'
  },
  header: {
    backgroundColor:'pink',
    padding:20,
    borderRadius: 10
  },
  boldText:{
    fontWeight: 'bold'
  },
  gap:{
    marginTop:10
  },
  buttonContainer:{
    marginTop:10
  },
  input:{
    borderColor: '#777',
    padding: 8,
    margin: 10,
    borderWidth:1,
    width: 200
  }
})
