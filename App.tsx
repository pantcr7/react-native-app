import React,{ useState} from "react";
import { StyleSheet,Text, View,FlatList } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoiitem";
const app = () => {
  const [todo, setTodo] = useState([
    {text:"buy coffee", key:'1'},
    {text:"buy pen", key:'2'},
    {text:"buy mobile", key:'3'},
    {text:"buy book", key:'4'},
    {text:"buy tea", key:'5'},
  ])
  const pressHandler = (key: string) => {
    setTodo((prev) => {
      return prev.filter(todo => todo.key != key)
    })
  }
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* form */}
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler = {pressHandler} />
            )}

          />
        </View>

      </View>
    </View>
  )

}
export default app;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  content:{
    marginTop:20,
    padding:20
  },
  list:{

  },
})