import React,{ useState} from "react";
import { StyleSheet,Text, View,FlatList,Alert, TouchableWithoutFeedback, Keyboard} from "react-native";

const Sandbox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>

        </View>
    )
}
export default Sandbox;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ddd',
        paddingTop: 40,
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end'
    },
    boxOne:{
        flex:1,
        backgroundColor:'violet',
        padding:10,
    },
    boxTwo:{
        flex:2,
        backgroundColor:'gold',
        padding:20,

    },
    boxThree:{
        flex:3,
        backgroundColor:'skyblue',
        padding:30,

    },
    boxFour:{
        flex:4,
        backgroundColor:'coral',
        padding:40,

    },
})