import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AIPreviewScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>AI Preview</Text>
        <Text style={styles.subtitle}>
          Review the structured issue before creating it
        </Text>

        <View style={styles.cardWarning}>
          <Text style={styles.warningTitle}>Possible Duplicate Detected</Text>
          <Text style={styles.warningText}>
            Similar issue found: “App crashes on login when network is unstable”
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>TITLE</Text>
          <Text style={styles.value}>Login crash on poor network</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>STEPS TO REPRODUCE</Text>
          <Text style={styles.value}>
            1. Open the app{"\n"}
            2. Enter valid credentials{"\n"}
            3. Toggle network on/off{"\n"}
            4. Tap Login
          </Text>
        </View>

        <View style={styles.row}>
          <View style={styles.smallCard}>
            <Text style={styles.label}>SEVERITY</Text>
            <Text style={{ color: "#ff5c5c" }}>High</Text>
          </View>
          <View style={styles.smallCard}>
            <Text style={styles.label}>ENVIRONMENT</Text>
            <Text style={{ color: "#ccc" }}>Android · v1.0.0</Text>
          </View>
        </View>
      </ScrollView>

      {/* ✅ THIS IS THE FIX */}
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
    backgroundColor: "#0b0f1a",
  },
  content: {
    padding: 20,
    paddingBottom: 120,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#b983ff",
    marginBottom: 6,
  },
  subtitle: {
    color: "#888",
    marginBottom: 20,
  },
  cardWarning: {
    backgroundColor: "#1c2033",
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#f5b942",
  },
  warningTitle: {
    color: "#f5b942",
    fontWeight: "700",
    marginBottom: 4,
  },
  warningText: {
    color: "#ccc",
  },
  card: {
    backgroundColor: "#14182a",
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },
  label: {
    color: "#777",
    fontSize: 12,
    marginBottom: 6,
  },
  value: {
    color: "#fff",
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  smallCard: {
    flex: 1,
    backgroundColor: "#14182a",
    borderRadius: 14,
    padding: 16,
  },
  button: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#7c4dff",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
