import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { type AppTabParamList } from "./types"
import HomeScreen from "@/screens/app/Home"
import SettingsScreen from "@/screens/app/Settings"

const Tab = createBottomTabNavigator<AppTabParamList>()

export default function AppTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}
