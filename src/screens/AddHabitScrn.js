import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

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

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Habit</Text>
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
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E1E1E",
    marginBottom: 30,
  },
  formGroup: { marginBottom: 20 },

  label: { fontSize: 14, color: "#1E1E1E", fontWeight: "600", marginBottom: 8 },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E5E5EA",

    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
    },

    cancelButton: {
      flex: 1,
      padding: 16,
      backgroundColor: "#E5E5EA",
      borderRadius: 12,
      marginRight: 10,
      alignItems: "center",
    },

    cancelButtonText: { color: "#1E1E1E", fontWeight: "bold", fontSize: 16 },

    saveButton: {
      flex: 1,
      padding: 16,
      backgroundColor: "#FF6F61",
      borderRadius: 12,
      marginLeft: 10,
      alignItems: "center",
    },

    saveButtonText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },
  },
});
