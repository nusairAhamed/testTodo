import { TouchableOpacity, Text } from "react-native";
import { S } from "./AddItemButton.style";
export function AddItemButton({ btnClick }) {
  return (
    <>
      <TouchableOpacity
        style={S.button}
        onPress={() => {
          btnClick();
        }}
      >
        <Text style={S.Text}>Add Item +</Text>
      </TouchableOpacity>
    </>
  );
}
