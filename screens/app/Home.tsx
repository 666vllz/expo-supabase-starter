import { ScrollView, StyleSheet, Text, View } from "react-native"
import { useAuth } from "@/context/AuthProvider"

export default function HomeScreen() {
  const { user } = useAuth()

  console.log(user)

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>{JSON.stringify(user, null, 2)}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
