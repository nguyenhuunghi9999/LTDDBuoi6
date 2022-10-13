import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Task = (props) => {
    const {number} = props;
    const numberText = number;
    const itemBackground = number % 2 === 0;
    return(
        <TouchableOpacity>
            <View style = {styles.item}>
                <View style = {[styles.square]}>
                    <Text style={styles.number}>{numberText}</Text>
                </View>
                <Text style={styles.content}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default Task;

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        backgroundColor: "#53d6f2",
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-between",
      },
      square: {
        width: 48,
        height: 36,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      },
      number: {
        fontSize: 16,
        fontWeight: "700",
        color: "blue",
      },
      content: {
        width: "80%",
        fontSize: 16,
      },
  });