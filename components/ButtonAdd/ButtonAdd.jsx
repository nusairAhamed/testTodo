import { TouchableOpacity, Text } from "react-native";
import { S } from "./ButtonAdd.style";

export function ButtonAdd({ addNewTask }) {
  return (
    <>
      <TouchableOpacity style={S.btn} onPress={() => addNewTask()}>
        <Text style={S.txt}>Add New Task +</Text>
      </TouchableOpacity>
    </>
  );
}
