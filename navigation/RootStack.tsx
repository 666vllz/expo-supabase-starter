import { useAuth } from "@/context/AuthProvider"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { type RootStackParamList } from "./types"
import AuthStack from "./AuthStack"
import AppTab from "./AppTab"

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootStack() {
  const { session } = useAuth()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {session === null ? (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      ) : (
        <Stack.Screen name="AppTab" component={AppTab} />
      )}
    </Stack.Navigator>
  )
}
