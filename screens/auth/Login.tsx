import { useState } from "react"
import { Alert, StyleSheet, Text, View } from "react-native"
import { type AuthStackScreenProps } from "@/navigation/types"
import { supabase } from "@/lib/supabase"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"

export default function LoginScreen({
  navigation,
}: AuthStackScreenProps<"Login">) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function signIn() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
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
      <Button title="Log in" onPress={signIn} />
      <View style={styles.row}>
        <Text style={styles.muted}>Don't have an account?</Text>
        <Text
          style={styles.underline}
          onPress={() => navigation.navigate("Signup")}
        >
          Sign up
        </Text>
      </View>
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  muted: {
    color: "#71717a",
  },
  underline: {
    textDecorationLine: "underline",
  },
})
