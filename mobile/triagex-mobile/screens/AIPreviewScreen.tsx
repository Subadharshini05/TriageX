import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function AIPreviewScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Preview</Text>

      <View style={styles.card}>
        <Text style={styles.label}>TITLE</Text>
        <Text style={styles.value}>Login crash on poor network</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>SEVERITY</Text>
        <Text style={styles.high}>High</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Success")}
      >
        <Text style={styles.buttonText}>Confirm & Create Issue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1020",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#b388ff",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#141a2e",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  label: {
    color: "#888",
    fontSize: 12,
    marginBottom: 6,
  },
  value: {
    color: "#fff",
    fontSize: 15,
  },
  high: {
    color: "#ff6b6b",
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#7c4dff",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
