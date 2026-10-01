import { View, Text, StyleSheet } from "react-native";

export default function AddHabitScrn() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Create New Routine</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Habit Name</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., Morning Meditation"
          placeholderTextColor="#8A8A8E"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Frequency (Daily Basis)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., Every Day"
          placeholderTextColor="#8A8A8E"
        />
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
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E1E1E",
    marginBottom: 30,
  },
  formGroup: { marginBottom: 20 },
});
