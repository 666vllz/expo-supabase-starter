import { StyleSheet, TextInput, type TextInputProps } from "react-native"

export default function Input({ ...props }: TextInputProps) {
  return (
    <TextInput style={styles.input} placeholderTextColor="#71717a" {...props} />
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#e4e4e7",
    borderRadius: 8,
    padding: 16,
  },
})
