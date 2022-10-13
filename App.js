import React, { useState } from "react";
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert, } from "react-native";
import Task from "./components/Task";
import Form from "./components/Form";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const handleDeleteTask = (index) => {
    Alert.alert("Thông báo !", "Bạn có chắc chắn muốn xóa?", [
      {
        text: "OK",
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index,1);
          setTaskList(taskListTmp);
        },
      },
      { text: "Cancel", onPress: () => {} },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>List</Text>
        <ScrollView style={styles.items}>
          {taskList.map((item, index) => {
            return (
              <Task
                key={index}
                title={item}
                number={index + 1}
                onDeleteTask={() => handleDeleteTask(index)}
              />
            );
          })}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#eff7f8",
    },
    body: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    header: {
      fontSize: 24,
      color: "#21a3d0",
      fontWeight: "bold",
    },
    items: {
      marginTop: 25,
    }
});
