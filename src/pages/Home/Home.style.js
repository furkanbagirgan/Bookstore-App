import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    padding: 15
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  errorTitle:{
    color: "#ba68c8",
    marginTop: 20,
    fontSize: 18
  }
});

export default styles;