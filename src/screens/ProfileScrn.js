import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.screenContent}>
        <Text style={styles.pageEyebrow}>YOUR SPACE</Text>
        <Text style={styles.pageTitle}>Profile</Text>
        <View style={styles.profileHeader}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
