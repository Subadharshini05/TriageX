import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TriageX</Text>
      <Text style={styles.subTitle}>AI-powered bug triage</Text>

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
    backgroundColor: "#0b0f1a",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#a855f7",
    marginBottom: 8,
  },
  subTitle: {
    color: "#aaa",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#7c3aed",
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 18,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
