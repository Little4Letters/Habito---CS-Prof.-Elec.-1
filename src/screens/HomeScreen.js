import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HabitSec from "../components/HabitsSec.js";

// Added containers for emphasis and better design. The code is now more organized and visually appealing para goods.
// Icon for style.weather is tikang sa google inspired by Dribble HAHAHHA nag pahelp lang

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>
            Good <Text style={styles.greetingHighlight}>Afternoon</Text>
          </Text>

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

      <View style={[styles.sectionHeader, { marginTop: 20 }]}>
        <Text style={styles.sectionTitle}>Completed</Text>
      </View>

      <HabitSec
        title="8 Hours of Sleep"
        frequency="Everyday or Seldom"
        isCompleted={true}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Upcoming Habits</Text>
        <Text style={styles.manageText}>Manage it Now!</Text>
      </View>

      <HabitSec title="Jogging" frequency="Every Day" color="#4DA8DA" />
      <HabitSec
        title="Reading Novels"
        frequency="Everyday or Seldom"
        color="#FFA07A"
      />
      <HabitSec title="8 Hour Sleep" frequency="Everyday" color="#9B59B6" />
    </View>
  );
}

// Basic pala dd an design kalma HAHAHAHA
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
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  sectionTitle: { fontSize: 16, fontWeight: "bold", color: "#1E1E1E" },
  manageText: { fontSize: 12, color: "#8A8A8E", fontWeight: "600" },
});
