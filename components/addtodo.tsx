import React, {useState} from "react";
import { StyleSheet,Text, View, TextInput, Button} from "react-native";

interface TodoItemProps {
    
    submitHandler: (key: string) => void; // Explicitly define the type of 'item'
}

const AddTodo:React.FC<TodoItemProps> = ({ submitHandler }) =>{
    const [text, setText] = useState('');
    const changeHandler = (value:string)=>{
        setText(value);

    }
    const emptyText = ()=>{
        setText('')
    }
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todo"
                onChangeText={(value) =>changeHandler(value)}
                value={text}
                placeholderTextColor="grey"
            />
            <Button onPress={() => {submitHandler(text); emptyText()}} title = 'Add Todo'  color ='coral'/>
        </View>
    )
}
export default AddTodo;

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        paddingVertical:6,
        paddingHorizontal:8,
        marginBottom:10,
        color:'black'
        
    }
})