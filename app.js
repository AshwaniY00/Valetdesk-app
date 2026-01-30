import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./screens/DetailScreen";
import FormScreen from "./screens/FormScreen";
import ListScreen from "./screens/ListScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Items" component={ListScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="Create Item" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
