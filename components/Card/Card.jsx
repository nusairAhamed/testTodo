import { View, Text, Image, TouchableOpacity } from "react-native";
import { S } from "./Card.style";
import check from "./../../assets/check.png";
export function Card({ todoItem, updateTodo, deleteItem }) {
  return (
    <>
      <TouchableOpacity
        onPress={() => updateTodo(todoItem)}
        onLongPress={() => {
          deleteItem(todoItem);
        }}
      >
        <View style={S.card}>
          <Text style={todoItem.isComplete && S.completed}>
            {todoItem.title}
          </Text>
          {todoItem.isComplete && <Image source={check} style={S.img} />}
        </View>
      </TouchableOpacity>
    </>
  );
}
