import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 5,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ededed",
  },
  image:{
    width: "25%",
    height: 100,
    resizeMode: "cover"
  },
  infoContainer:{
    width: "65%",
    flexDirection:"column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingLeft: 10,
    paddingRight: 10
  },
  title:{
    color: "#000",
    fontSize: 16,
    marginBottom: 10
  },
  price:{
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer:{
    width:"10%",
    alignSelf: "flex-start"
  }
});

export default styles;