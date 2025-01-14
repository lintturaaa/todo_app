import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./screens/login/login";
import { Profile } from "./screens/profile/profile";
import { Signup } from "./screens/signup/signup";
import { Todos } from "./screens/todos/todoScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainContent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Todos" component={Todos} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={MainContent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
