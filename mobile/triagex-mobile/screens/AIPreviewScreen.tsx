import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AIPreviewScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>AI Preview</Text>
        <Text style={styles.sub}>
          Review the structured issue before creating it
        </Text>

        <View style={styles.card}>
          <Text style={styles.warn}>Possible Duplicate Detected</Text>
          <Text style={styles.text}>
            Similar issue found: "App crashes on login when network is unstable"
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>TITLE</Text>
          <Text style={styles.text}>Login crash on poor network</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>STEPS TO REPRODUCE</Text>
          <Text style={styles.text}>1. Open the app</Text>
          <Text style={styles.text}>2. Enter valid credentials</Text>
          <Text style={styles.text}>3. Toggle network on/off</Text>
          <Text style={styles.text}>4. Tap Login</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.smallCard}>
            <Text style={styles.label}>SEVERITY</Text>
            <Text style={{ color: "red" }}>High</Text>
          </View>

          <View style={styles.smallCard}>
            <Text style={styles.label}>ENVIRONMENT</Text>
            <Text style={styles.text}>Android · v1.0.0</Text>
          </View>
        </View>
      </ScrollView>

      {/* 🔥 THIS IS THE IMPORTANT PART */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Success")}
      >
        <Text style={styles.btnText}>Confirm & Create Issue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0f1a",
  },
  content: {
    padding: 16,
    paddingBottom: 120,
  },
  heading: {
    fontSize: 24,
    color: "#a855f7",
    fontWeight: "700",
  },
  sub: {
    color: "#aaa",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#141a2b",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  warn: {
    color: "#facc15",
    fontWeight: "600",
    marginBottom: 4,
  },
  label: {
    color: "#777",
    fontSize: 12,
    marginBottom: 4,
  },
  text: {
    color: "#eee",
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  smallCard: {
    flex: 1,
    backgroundColor: "#141a2b",
    padding: 16,
    borderRadius: 16,
  },
  button: {
    position: "absolute",
    bottom: 24,
    left: 16,
    right: 16,
    backgroundColor: "#7c3aed",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
