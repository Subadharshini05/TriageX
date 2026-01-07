import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SuccessScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Issue Created ✅</Text>
      <Text style={styles.text}>Your issue has been successfully created.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F1A",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#7CFF9E",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 10,
  },
  text: {
    color: "#B0B6C9",
  },
});
