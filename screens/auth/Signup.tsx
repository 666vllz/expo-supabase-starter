import { useState } from "react"
import { Alert, StyleSheet, View } from "react-native"
import { supabase } from "@/lib/supabase"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"

export default function SignupScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function signUp() {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) {
      Alert.alert(error.message)
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Input
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View>
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button title="Sign up" onPress={signUp} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    gap: 16,
  },
})
