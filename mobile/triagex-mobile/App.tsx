import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [description, setDescription] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Issue</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>What went wrong?</Text>

        <TextInput
          style={styles.input}
          placeholder="Describe the bug or paste logs..."
          placeholderTextColor="#6B7280"
          multiline
          value={description}
          onChangeText={setDescription}
        />

        <View style={styles.attachments}>
          <View style={styles.attachmentBox}>
            <Text style={styles.attachmentText}>📷 Screenshot</Text>
          </View>
          <View style={styles.attachmentBox}>
            <Text style={styles.attachmentText}>🎤 Dictate</Text>
          </View>
        </View>

        <View style={styles.context}>
          <Text style={styles.contextTitle}>AUTO-CONTEXT</Text>
          <Text style={styles.contextItem}>Device: Android / iPhone</Text>
          <Text style={styles.contextItem}>Network: Wi-Fi</Text>
          <Text style={styles.contextItem}>Build: v1.0.0</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Triage with AI</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F14",
  },
  header: {
    padding: 16,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 12,
  },
  input: {
    backgroundColor: "#111827",
    borderRadius: 12,
    padding: 14,
    color: "#FFFFFF",
    height: 160,
    textAlignVertical: "top",
    marginBottom: 16,
  },
  attachments: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  attachmentBox: {
    backgroundColor: "#111827",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  attachmentText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  context: {
    backgroundColor: "#111827",
    borderRadius: 12,
    padding: 14,
  },
  contextTitle: {
    color: "#A78BFA",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 8,
  },
  contextItem: {
    color: "#9CA3AF",
    fontSize: 14,
    marginBottom: 4,
  },
  button: {
    backgroundColor: "#7C3AED",
    padding: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
