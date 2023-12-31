import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: "#FFF",
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
        <Stack.Screen name="OrderDetails" component={OrderDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
