import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface TodoItemProps {
    item: {
        key: string; text: string 
    };
    pressHandler: (key: string) => void; // Explicitly define the type of 'item'
}

const TodoItem: React.FC<TodoItemProps> = ({ item, pressHandler }) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
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
        borderStyle:'dashed'
    }
})