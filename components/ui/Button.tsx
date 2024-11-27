import { Pressable, type PressableProps, StyleSheet, Text } from "react-native"

type ButtonProps = PressableProps & {
  title: string
  variant?: "primary" | "destructive"
}

export default function Button({
  title,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Pressable
      style={[
        styles.button,
        variant === "primary" && styles.primary,
        variant === "destructive" && styles.destructive,
        props.disabled && styles.disabled,
      ]}
      {...props}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "500",
  },
  primary: {
    backgroundColor: "#2563eb",
  },
  destructive: {
    backgroundColor: "#dc2626",
  },
  disabled: {
    opacity: 0.5,
  },
})
