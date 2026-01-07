import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TriageX</Text>
      <Text style={styles.subtitle}>
        AI-powered bug triage made simple
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AIPreview")}
      >
        <Text style={styles.buttonText}>Create New Issue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1020",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#b388ff",
    marginBottom: 10,
  },
  subtitle: {
    color: "#aaa",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#7c4dff",
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
