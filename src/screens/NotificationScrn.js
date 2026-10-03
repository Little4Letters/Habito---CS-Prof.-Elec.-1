import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AlertsScreen() {
  const [morningReminder, setMorningReminder] = useState(true);
  const [eveningReminder, setEveningReminder] = useState(false);
  const [streakNotice, setStreakNotice] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.screenContent}>
        <Text style={styles.pageEyebrow}>STAY ON TRACK</Text>
        <Text style={styles.pageTitle}>Alerts</Text>
        <View style={styles.alertHighlight}>
          <View style={styles.alertIcon}>
            <Ionicons name="notifications" size={22} color="#F05E79" />
          </View>
          <View style={styles.alertHighlightCopy}>
            <Text style={styles.alertHighlightTitle}>Your reminders</Text>
            <Text style={styles.alertHighlightDetail}>
              A little nudge at the right time.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
