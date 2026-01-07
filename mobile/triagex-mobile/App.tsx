import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

/* ---------- SCREEN 1 : AI PREVIEW ---------- */
function AIPreviewScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Preview</Text>
      <Text style={styles.subtitle}>
        Review the structured issue before creating it
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Possible Duplicate Detected</Text>
        <Text style={styles.cardText}>
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
          <Text style={{ color: "#ff6b6b" }}>High</Text>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.label}>ENVIRONMENT</Text>
          <Text style={styles.value}>Android · v1.0.0</Text>
        </View>
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

/* ---------- SCREEN 2 : SUCCESS ---------- */
function SuccessScreen() {
  return (
    <View style={styles.successContainer}>
      <Text style={styles.successTitle}>✅ Issue Created</Text>
      <Text style={styles.successText}>
        Your issue has been successfully created.
      </Text>
    </View>
  );
}

/* ---------- APP ROOT ---------- */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Preview" component={AIPreviewScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* ---------- STYLES ---------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1020",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#b388ff",
  },
  subtitle: {
    color: "#aaa",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#141a2e",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  cardTitle: {
    color: "#ffca28",
    fontWeight: "700",
    marginBottom: 6,
  },
  cardText: {
    color: "#ddd",
  },
  label: {
    color: "#888",
    fontSize: 12,
    marginBottom: 4,
  },
  value: {
    color: "#fff",
  },
  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  smallCard: {
    flex: 1,
    backgroundColor: "#141a2e",
    borderRadius: 16,
    padding: 16,
  },
  button: {
    backgroundColor: "#7c4dff",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  successContainer: {
    flex: 1,
    backgroundColor: "#0b1020",
    alignItems: "center",
    justifyContent: "center",
  },
  successTitle: {
    fontSize: 26,
    color: "#7c4dff",
    fontWeight: "700",
    marginBottom: 10,
  },
  successText: {
    color: "#ccc",
  },
});
