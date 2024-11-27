import { AuthProvider } from "./context/AuthProvider"
import { NavigationContainer } from "@react-navigation/native"
import RootStack from "./navigation/RootStack"

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AuthProvider>
  )
}
