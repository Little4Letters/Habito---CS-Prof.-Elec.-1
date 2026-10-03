import {} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ReminderRow({ icon, title, detail, value, onChange }) {
  return (
    <View style={styles.reminderRow}>
      <View style={styles.reminderIcon}>
        <Ionicons name={icon} size={20} color="#656670" />
      </View>
      <View style={styles.reminderCopy}>
        <Text style={styles.reminderTitle}>{title}</Text>
        <Text style={styles.reminderDetail}>{detail}</Text>
      </View>
      <Switch
        accessibilityLabel={title}
        value={value}
        onValueChange={onChange}
        trackColor={{ false: "#D9D9DE", true: "#F2A0AE" }}
        thumbColor={value ? "#F05E79" : "#FFFFFF"}
      />
    </View>
  );
}
