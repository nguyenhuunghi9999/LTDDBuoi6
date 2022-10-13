import { useState } from "react";
import {
    View,
    Text, StyleSheet, 
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
  } from "react-native";
const Form = (props) => {
    const [task, setTask] = useState('');
    const handleAddTask = () => {
        if(task.length === 0) {
            alert("Ban chua nhap cong viec");
            return;
        }
        props.onAddTask(task);
        setTask('');
        Keyboard.dismiss();
    }
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        KeyboardAvoidingView = {10}
        style = {styles.addTask}>
             <TextInput style = {styles.input} placeholder="Your Task"
             onChangeText={(text) => setTask(text)} value ={task}>
             </TextInput>
             <TouchableOpacity onPress={handleAddTask}>
                <View style = {styles.icon}>
                    <Text style = {styles.textIcon}>+</Text>
                </View>
             </TouchableOpacity>
        </KeyboardAvoidingView>
    )
};
export default Form;

const styles = StyleSheet.create({
    addTask:{
        bottom:30,
        paddingHorizontal:20,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    input:{
        height:45,
        width:'80%',
        backgroundColor: 'white',
        borderWidth:1,
        borderColor:'primary',
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:10,
        color: 'black',

    },
    icon:{
        width:45,
        height:45,
        backgroundColor:'primary',
        borderRadius:45,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor: '2px solid black'
    },
    textIcon:{
        fontSize:24,
        color:'black',
    }
  });