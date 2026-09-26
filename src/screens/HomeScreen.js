import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>
            Good <Text style={styles.greetingHighlight}>Afternoon</Text>
          </Text>
          <Text style={styles.weather}>🌤 32 °C</Text>
        </View>
        <TouchableOpacity style={styles.calendarButton}>
          <Text>📅</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 30,
  },
  greeting: { fontSize: 26, fontWeight: "bold", color: "#1E1E1E" },
  greetingHighlight: { color: "#FF6F61" },
  weather: { fontSize: 14, color: "#8A8A8E", marginTop: 4 },
  calendarButton: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E5EA",
  },
});
