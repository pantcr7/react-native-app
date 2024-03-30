import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface TodoItemProps {
    item: {
        key: string; text: string 
    };
    pressHandler: (key: string) => void; // Explicitly define the type of 'item'
}

const TodoItem: React.FC<TodoItemProps> = ({ item, pressHandler }) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style = {styles.item}>
                <Icon name="delete" size={20} color="#900" />
                <Text style ={styles.itemText}>{item.text}</Text>
            </View>
           
        </TouchableOpacity>
    );
};

export default TodoItem;

const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor:'#bbb',
        borderRadius:10,
        borderWidth:1,
        borderStyle:'dashed',
        color:'black',
        flexDirection:'row'
    },
    itemText:{
        marginLeft: 10,
    }
})