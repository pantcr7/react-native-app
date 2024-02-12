import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, FlatList, Dimensions,TouchableOpacity } from "react-native";

const app = () =>{
const [people, setPeople] = useState([
  //works fine for key but for id, it works differently using
  {name: 'Shyam', id: '1'},
  {name: 'Radhe', id: '2'},
  {name: 'Krishna', id: '3'},
  {name: 'Hare', id: '4'},
  {name: 'Ram', id: '5'},
  {name: 'Shyam', id: '6'},
  {name: 'Radhe', id: '7'},
  {name: 'Krishna', id: '8'},
  {name: 'Hare', id: '9'},
  {name: 'Ram', id: '10'},
  {name: 'Shyam', id: '11'},
  {name: 'Radhe', id: '12'},
  {name: 'Krishna', id: '13'},
  {name: 'Hare', id: '14'},
  {name: 'Ram', id: '15'},
])

const pressHanddler = (id: string) =>{
  console.log(id)
  setPeople((prev) => {
    return prev.filter(person => person.id != id)
  })
}
return(
  <View style = {styles.container}>
    
   <FlatList
   numColumns={3}
   keyExtractor={(item) => item.id}
   data={people}
   renderItem={({ item }) => (
    <TouchableOpacity onPress={() => pressHanddler(item.id)}>
    <View style={styles.itemContainer}>
    <Text style={styles.item}>{item.name}</Text>
    
  </View>
  </TouchableOpacity>
   )}
   />
    
  </View>
)
}
export default app;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    paddingHorizontal:20
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: (Dimensions.get('window').width - 60) / 3, // Adjust width for 3 columns
    backgroundColor: 'pink',
  },
  item:{
    
    fontSize:15,
    padding:10,
 
    
  }
})