import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report a Bug</Text>

      <TextInput
        style={styles.input}
        placeholder="Describe what went wrong..."
        placeholderTextColor="#9CA3AF"
        multiline
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Triage with AI</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0F",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#A855F7",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#111827",
    borderRadius: 12,
    padding: 14,
    color: "#FFFFFF",
    height: 140,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#7C3AED",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
