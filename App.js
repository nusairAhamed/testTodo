import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./components/header/header";
import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";
import { ButtonAdd } from "./components/ButtonAdd/ButtonAdd";
import Dialog from "react-native-dialog";
import uuid from "react-native-uuid";

export default function App() {
  const [todoList, SetTodoList] = useState([
    { id: 1, title: "Learn HTML", isComplete: false },
    { id: 2, title: "Learn CSS", isComplete: false },
    { id: 3, title: "Learn JS", isComplete: false },

    { id: 4, title: "Learn React Native", isComplete: true },
  ]);

  const updateTodo = (todoItem) => {
    //Create Shallow copy from the original State Varialble
    const copyTodoList = [...todoList];
    const index = copyTodoList.findIndex((item) => item.id == todoItem.id);
    const updatedTodoItem = { ...todoItem, isComplete: !todoItem.isComplete };
    copyTodoList[index] = updatedTodoItem;
    SetTodoList(copyTodoList);
  };

  const [activeTab, SetActiveTab] = useState("all");
  const [showAddNewModal, SetShowAddNewModal] = useState(false);
  const [taskName, SetTaskName] = useState("");

  const changeActiveTab = (tabValue) => SetActiveTab(tabValue);

  const filteredList = () => {
    if (activeTab == "all") {
      return todoList;
    } else if (activeTab == "inProgress") {
      return todoList.filter((item) => item.isComplete == false);
    } else if (activeTab == "completed") {
      return todoList.filter((item) => item.isComplete == true);
    }
  };

  const deleteItem = (todoItem) => {
    Alert.alert("Delete", "Do you want to delete this item ? ", [
      {
        text: "delete",
        onPress: () => {
          const remainingData = todoList.filter(
            (item) => item.id != todoItem.id
          );
          SetTodoList(remainingData);
        },
      },
      { text: "cancel", style: "cancel" },
    ]);
  };

  const addNewTask = () => {
    const newData = { id: uuid.v4(), title: taskName, isComplete: false };
    SetTodoList([...todoList, newData]);
    SetShowAddNewModal(false);
  };

  const ShowAddNewModal = () => {
    return (
      <View>
        <Dialog.Container
          visible={showAddNewModal}
          onBackdropPress={() => SetShowAddNewModal(false)}
        >
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this account? You cannot undo this action.
          </Dialog.Description>
          <Dialog.Input
            placeholder="Enter your task name here"
            onChangeText={SetTaskName}
          />
          <Dialog.Button
            label="Cancel"
            onPress={() => SetShowAddNewModal(false)}
          />
          <Dialog.Button label="Save" onPress={() => addNewTask()} />
        </Dialog.Container>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Header />
      </View>
      <View style={styles.body}>
        <ScrollView>
          {filteredList().map((item) => (
            <Card
              key={item.id}
              todoItem={item}
              updateTodo={updateTodo}
              deleteItem={deleteItem}
            />
          ))}
        </ScrollView>
        <ButtonAdd addNewTask={() => SetShowAddNewModal(true)} />
      </View>
      <View style={styles.footer}>
        <Footer
          activeTab={activeTab}
          changeActiveTab={changeActiveTab}
          data={todoList}
        />
      </View>
      {ShowAddNewModal()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    justifyContent: "top",
    paddingHorizontal: 10,
  },
  head: { height: 100, justifyContent: "center" },
  body: { flex: 1 },
  footer: { height: 50, justifyContent: "center" },
});
