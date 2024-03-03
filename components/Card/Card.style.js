import { StyleSheet } from "react-native";

export const S = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 25,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginHorizontal: 5,
    marginTop: 5,
    elevation: 5,
  },
  img: {
    width: 30,
    height: 30,
  },
  text: { fontSize: 20 },
  completed: { textDecorationLine: "line-through" },
  red: {
    backgroundColor: "red",
  },
});
