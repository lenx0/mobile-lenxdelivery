import { StyleSheet, Text, View } from "react-native";
import Header from "../Header";
import OrderCard from "../OrderCard";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

export default function Orders() {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: "5%",
    paddingLeft: "5%",
  },
});