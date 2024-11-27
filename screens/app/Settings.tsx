import { StyleSheet, Text, View } from "react-native"
import { useAuth } from "@/context/AuthProvider"
import Button from "@/components/ui/Button"

export default function SettingsScreen() {
  const { signOut } = useAuth()

  return (
    <View style={styles.container}>
      <Button title="Log out" variant="destructive" onPress={signOut} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
})
