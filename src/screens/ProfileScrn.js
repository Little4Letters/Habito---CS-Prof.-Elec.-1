import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ReminderRow from "../components/ReminderSec.js";

export default function ProfileScreen() {
  const [weeklySummary, setWeeklySummary] = useState(true);
  const [quietMode, setQuietMode] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.screenContent}>
        <Text style={styles.pageEyebrow}>YOUR SPACE</Text>
        <Text style={styles.pageTitle}>Profile</Text>
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={31} color="#FFFFFF" />
          </View>
          <View style={styles.profileCopy}>
            <Text style={styles.profileName}>Habit Builder</Text>
            <Text style={styles.profileSubtitle}>Small steps, every day</Text>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Edit profile"
            style={styles.editButton}
          >
            <Ionicons name="create-outline" size={20} color="#62636C" />
          </Pressable>
        </View>
        <View style={styles.profileStats}>
          <View style={styles.profileStat}>
            <Text style={styles.profileStatValue}>12</Text>
            <Text style={styles.profileStatLabel}>Day streak</Text>
          </View>
          <View style={styles.profileStatDivider} />
          <View style={styles.profileStat}>
            <Text style={styles.profileStatValue}>8</Text>
            <Text style={styles.profileStatLabel}>Habits done</Text>
          </View>
          <View style={styles.profileStatDivider} />
          <View style={styles.profileStat}>
            <Text style={styles.profileStatValue}>4</Text>
            <Text style={styles.profileStatLabel}>Best streak</Text>
          </View>
        </View>
        <Text style={[styles.sectionTitle, styles.profileSectionTitle]}>
          PREFERENCES
        </Text>
        <ReminderRow
          icon="bar-chart-outline"
          title="Weekly Summary"
          detail="A recap of your progress"
          value={weeklySummary}
          onChange={setWeeklySummary}
        />
        <ReminderRow
          icon="moon-outline"
          title="Quiet Mode"
          detail="Reduce reminder notifications"
          value={quietMode}
          onChange={setQuietMode}
        />
        <Pressable
          accessibilityRole="button"
          onPress={() => {}}
          style={styles.profileLink}
        >
          <View style={styles.reminderIcon}>
            <Ionicons name="help-circle-outline" size={20} color="#656670" />
          </View>
          <Text style={styles.profileLinkText}>Help and support</Text>
          <Ionicons name="chevron-forward" size={17} color="#96969E" />
        </Pressable>
        <Text style={styles.localNote}>
          This profile is a visual preview. Your information stays on this
          screen.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
