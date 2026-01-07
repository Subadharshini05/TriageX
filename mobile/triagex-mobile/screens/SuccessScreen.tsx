import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SuccessScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>✅ Issue Created</Text>
      <Text style={styles.text}>
        Your issue has been successfully created.
      </Text>
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
    fontSize: 26,
    color: "#7c4dff",
    fontWeight: "700",
    marginBottom: 10,
  },
  text: {
    color: "#ccc",
    textAlign: "center",
  },
});
