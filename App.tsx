import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";

const app = () =>{
const [people, setPeople] = useState([
  {name: 'Shyam', key: '1'},
  {name: 'Radhe', key: '2'},
  {name: 'Krishna', key: '3'},
  {name: 'Hare', key: '4'},
  {name: 'Ram', key: '5'},
  {name: 'Shyam', key: '6'},
  {name: 'Radhe', key: '7'},
  {name: 'Krishna', key: '8'},
  {name: 'Hare', key: '9'},
  {name: 'Ram', key: '10'},
  {name: 'Shyam', key: '11'},
  {name: 'Radhe', key: '12'},
  {name: 'Krishna', key: '13'},
  {name: 'Hare', key: '14'},
  {name: 'Ram', key: '15'},
])
return(
  <View style = {styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
    {/* {people.map((item) =>{
      return(
        <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
        </View>
      )
    })} */}

      {people.map(item => (
        <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
        </View>
      
    ))}
    </ScrollView>
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
  item:{
    marginTop:20,
    backgroundColor:'pink',
    fontSize:20,
    padding:20
  }
})