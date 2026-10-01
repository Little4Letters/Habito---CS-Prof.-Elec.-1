import { View, Text, StyleSheet } from "react-native";

export default function AddHabitScrn() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Create New Routine</Text>
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
});
