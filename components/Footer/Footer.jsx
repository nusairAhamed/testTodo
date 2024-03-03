import { TouchableOpacity, View, Text } from "react-native";
import { S } from "./footer.style";

export function Footer({ activeTab, changeActiveTab, taskCount }) {
  return (
    <>
      <View style={S.footer}>
        <TouchableOpacity>
          <Text>All </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>In Progress </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Completed </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
