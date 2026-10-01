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
  },
});
