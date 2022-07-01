import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container:{
    flex: 1,
    backgroundColor: "#fff",
    padding: 15
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10
  }
});

export default styles;