import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HabitCard({
  title,
  frequency,
  color,
  sectionCompleted,
}) {
  return (
    <View
      style={[
        styles.card,
        sectionCompleted ? styles.cardCompleted : { backgroundColor: color },
      ]}
    >
      <View style={styles.leftContent}>
        <View
          style={[
            styles.iconPlaceholder,
            sectionCompleted && styles.iconPlaceholderCompleted,
          ]}
        >
          <Text
            style={
              sectionCompleted ? styles.iconTextCompleted : styles.iconText
            }
          >
            ★
          </Text>
        </View>
        <View>
          <Text
            style={[styles.title, sectionCompleted && styles.titleCompleted]}
          >
            {title}
          </Text>
          <Text
            style={[
              styles.frequency,
              sectionCompleted && styles.frequencyCompleted,
            ]}
          >
            {frequency}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.checkCircle,
          sectionCompleted && styles.checkCircleCompleted,
        ]}
      >
        {sectionCompleted && <Text style={{ color: "#FFF" }}>✓</Text>}
      </TouchableOpacity>
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
  cardCompleted: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E5EA",
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
  iconPlaceholderCompleted: { backgroundColor: "#F0F0F0" },
  iconText: { color: "#FFFFFF", fontSize: 18 },
  iconTextCompleted: { color: "#FF6F61", fontSize: 18 },
  title: { fontSize: 16, fontWeight: "bold", color: "#FFFFFF" },
  titleCompleted: { color: "#1E1E1E" },
  frequency: { fontSize: 12, color: "rgba(255,255,255,0.8)", marginTop: 4 },
  frequencyCompleted: { color: "#8A8A8E" },
  checkCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.5)",
  },
  checkCircleCompleted: {
    backgroundColor: "#1E1E1E",
    borderColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
  },
});
