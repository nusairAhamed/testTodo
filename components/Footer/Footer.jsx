import { TouchableOpacity, View, Text } from "react-native";
import { S } from "./footer.style";

export function Footer({ activeTab, changeActiveTab, data }) {
  const countStatus = data.reduce(
    (acc, item) => {
      item.isComplete == true ? acc.completed++ : acc.inProgress++;

      return acc;
    },
    {
      all: data.length,
      inProgress: 0,
      completed: 0,
    }
  );

  return (
    <>
      <View style={S.footer}>
        <TouchableOpacity onPress={() => changeActiveTab("all")}>
          <Text style={activeTab == "all" ? S.active : ""}>
            All ({countStatus.all})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeActiveTab("inProgress")}>
          <Text style={activeTab == "inProgress" ? S.active : ""}>
            In Progress({countStatus.inProgress})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeActiveTab("completed")}>
          <Text style={activeTab == "completed" ? S.active : ""}>
            Completed({countStatus.completed})
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
