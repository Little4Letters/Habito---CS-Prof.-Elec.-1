import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HabitCard({ title, frequency, color }) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <View style={styles.leftContent}>
        <View style={styles.iconPlaceholder}>
          <Text style={styles.iconText}>★</Text>
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.frequency}>{frequency}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.checkCircle}></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 20,
    marginBottom: 12,
  },
  leftContent: { flexDirection: "row", alignItems: "center" },
  iconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  iconText: { color: "#FFFFFF", fontSize: 18 },
  title: { fontSize: 16, fontWeight: "bold", color: "#FFFFFF" },
  frequency: { fontSize: 12, color: "rgba(255,255,255,0.8)", marginTop: 4 },
  checkCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.5)",
  },
});
