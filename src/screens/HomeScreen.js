import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    // This is the container for the entire screen on the top near the header, with padding and background color as a
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>
            Good <Text style={styles.greetingHighlight}>Afternoon</Text>
          </Text>
          {/* Nag add ak dd weather icon sa google hehehe */}
          <Text style={styles.weather}>🌤 32 °C</Text>
        </View>
        <TouchableOpacity style={styles.calendarButton}>
          <Text>📅</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dateStrip}>
        <View style={styles.dateCard}>
          <Text style={styles.dayText}>Sun</Text>
          <Text style={styles.dateNum}>23</Text>
        </View>
        <View style={[styles.dateCard, styles.dateCardActive]}>
          <Text style={[styles.dayText, styles.textWhite]}>Mon</Text>
          <Text style={[styles.dateNum, styles.textWhite]}>24</Text>
        </View>
        <View style={styles.dateCard}>
          <Text style={styles.dayText}>Tue</Text>
          <Text style={styles.dateNum}>25</Text>
        </View>
      </View>
    </View>
  );
}

// The sheet for designing the container as flexbox, background color, padding, and other styles for the header, greeting, weather, calendar button, date strip, and date cards.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 30,
  },
  greeting: { fontSize: 26, fontWeight: "bold", color: "#1E1E1E" },
  greetingHighlight: { color: "#FF6F61" },
  weather: { fontSize: 14, color: "#8A8A8E", marginTop: 4 },
  calendarButton: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E5EA",
  },
  dateStrip: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  dateCard: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
  },
  dateCardActive: { backgroundColor: "#FF6F61" },
  dayText: { fontSize: 12, color: "#8A8A8E", marginBottom: 4 },
  dateNum: { fontSize: 18, fontWeight: "bold", color: "#1E1E1E" },
  textWhite: { color: "#FFFFFF" },
});
