import { View, StyleSheet } from "react-native";

export default function HabitCard() {
  return <View style={styles.card}></View>;
}

const styles = StyleSheet.create({
  card: {
    height: 80,
    backgroundColor: "#4DA8DA",
    borderRadius: 20,
    marginBottom: 12,
  },
});
