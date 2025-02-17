import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { type AuthStackParamList } from "./types"
import LoginScreen from "@/screens/auth/Login"
import SignupScreen from "@/screens/auth/Signup"

const Stack = createNativeStackNavigator<AuthStackParamList>()

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  )
}
