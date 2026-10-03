import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const periods = ["Today", "This Week", "This Month"];

export default function ProgressScreen({ habits }) {
  const [period, setPeriod] = useState("This Week");
  const complete = habits.filter((habit) => habit.completed).length;
  const score = habits.length
    ? Math.round((complete / habits.length) * 100)
    : 0;

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.screenContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageEyebrow}>YOUR CONSISTENCY</Text>
        <Text style={styles.pageTitle}>Progress</Text>

        <View style={styles.segment}>
          {periods.map((option) => (
            <Pressable
              key={option}
              onPress={() => setPeriod(option)}
              style={[
                styles.segmentOption,
                period === option && styles.segmentActive,
              ]}
            >
              <Text
                style={[
                  styles.segmentText,
                  period === option && styles.segmentTextActive,
                ]}
              >
                {option}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.scorePanel}>
          <View style={styles.scoreCopy}>
            <Text style={styles.panelHeading}>Habits</Text>
            <View style={styles.legendRow}>
              <View
                style={[styles.legendDot, { backgroundColor: "#F05E79" }]}
              />
              <Text style={styles.legendText}>Completed {complete}</Text>
            </View>
            <View style={styles.legendRow}>
              <View
                style={[styles.legendDot, { backgroundColor: "#F5C85B" }]}
              />
              <Text style={styles.legendText}>
                Remaining {Math.max(habits.length - complete, 0)}
              </Text>
            </View>
            <View style={styles.legendRow}>
              <View
                style={[styles.legendDot, { backgroundColor: "#292A35" }]}
              />
              <Text style={styles.legendText}>Overdue 0</Text>
            </View>
          </View>
          <View style={styles.scoreRing}>
            <View style={styles.ringCutout}>
              <Text style={styles.scoreCaption}>Habit score</Text>
              <Text style={styles.scoreValue}>{score}%</Text>
            </View>
          </View>
        </View>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCell}>
            <Text style={styles.summaryValue}>
              {complete}/{habits.length}
            </Text>
            <Text style={styles.summaryLabel}>Done {period.toLowerCase()}</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryCell}>
            <Text style={styles.summaryValue}>{complete ? "4" : "0"} days</Text>
            <Text style={styles.summaryLabel}>Best streak</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Habits progress</Text>
        {habits.map((habit) => (
          <View
            key={habit.id}
            style={[
              styles.progressCard,
              { backgroundColor: habit.color || "#4388F5" },
            ]}
          >
            <View style={styles.progressTopRow}>
              <View style={styles.progressIcon}>
                <Ionicons
                  name={habit.icon || "sparkles-outline"}
                  size={21}
                  color={habit.color || "#4388F5"}
                />
              </View>
              <Text numberOfLines={1} style={styles.progressHabitName}>
                {habit.title}
              </Text>
              <Text style={styles.streakPill}>
                {habit.completed ? "4 Days" : "2 Days"}
              </Text>
            </View>
            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  { width: habit.completed ? "76%" : "38%" },
                ]}
              />
            </View>
            <View style={styles.weekRow}>
              {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => {
                const marked =
                  habit.completed ||
                  index < (habit.title === "Jogging" ? 2 : 4);
                return (
                  <View key={`${day}-${index}`} style={styles.dayStatus}>
                    <View
                      style={[styles.dayMark, marked && styles.dayMarkDone]}
                    >
                      {marked && (
                        <Ionicons name="checkmark" size={11} color="#9660E8" />
                      )}
                    </View>
                    <Text style={styles.dayLabel}>{day}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
