import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SuccessScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>✅</Text>

      <Text style={styles.title}>Issue Created Successfully</Text>

      <Text style={styles.sub}>
        Your bug has been submitted and is ready for triage.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.btnText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0f1a",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  icon: {
    fontSize: 48,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    color: "#a855f7",
    fontWeight: "700",
    marginBottom: 8,
  },
  sub: {
    color: "#aaa",
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#7c3aed",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 14,
  },
  btnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
