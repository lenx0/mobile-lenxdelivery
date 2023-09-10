import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../images/logo.png")}
        style={{ width: 38, height: 24 }}
      />
      <Text style={styles.text}>LENX Delivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DA5C5C",
    height: 90,
    paddingTop: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: "#FFF",
    marginLeft: 15,
    fontFamily: "OpenSans_700Bold",
  },
});
