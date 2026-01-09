import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AIPreviewScreen() {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true);
    // fake AI processing
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Success");
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>AI Preview</Text>
        <Text style={styles.subHeader}>
          Review the structured issue before creating it
        </Text>

        <View style={styles.cardWarning}>
          <Text style={styles.warnTitle}>Possible Duplicate Detected</Text>
          <Text style={styles.warnText}>
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
            <Text style={styles.severity}>High</Text>
          </View>
          <View style={styles.smallCard}>
            <Text style={styles.label}>ENVIRONMENT</Text>
            <Text style={styles.value}>Android · v1.0.0</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.7 }]}
        onPress={handleConfirm}
        disabled={loading}
      >
        {loading ? (
          <>
            <ActivityIndicator color="#fff" />
            <Text style={styles.loadingText}>AI analysing…</Text>
          </>
        ) : (
          <Text style={styles.buttonText}>Confirm & Create Issue</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b0f1a" },
  content: { padding: 20, paddingBottom: 120 },
  header: { fontSize: 24, color: "#a855f7", fontWeight: "700", marginBottom: 6 },
  subHeader: { color: "#aaa", marginBottom: 16 },
  cardWarning: {
    backgroundColor: "#1a2238",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#facc15",
  },
  warnTitle: { color: "#facc15", fontWeight: "700", marginBottom: 4 },
  warnText: { color: "#ddd" },
  card: {
    backgroundColor: "#151b2e",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  label: { color: "#777", fontSize: 12, marginBottom: 4 },
  value: { color: "#fff", fontSize: 15 },
  row: { flexDirection: "row", gap: 12 },
  smallCard: {
    flex: 1,
    backgroundColor: "#151b2e",
    borderRadius: 16,
    padding: 16,
  },
  severity: { color: "#ef4444", fontWeight: "700" },
  button: {
    position: "absolute",
    bottom: 24,
    left: 20,
    right: 20,
    backgroundColor: "#7c3aed",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  loadingText: { color: "#fff", marginTop: 6, fontWeight: "600" },
});
