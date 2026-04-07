import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Settings() {
  const settingsItems = [
    { title: "Account Settings", icon: "person-outline" },
    { title: "Notifications", icon: "notifications-outline" },
    { title: "Preferences", icon: "options-outline" },
    { title: "Payment Settings", icon: "card-outline" },
    { title: "Help & Support", icon: "help-circle-outline" },
    { title: "About App", icon: "information-circle-outline" },
    { title: "Logout", icon: "log-out-outline", color: "#ff6347" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {settingsItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Ionicons
            name={item.icon as any}
            size={22}
            color={item.color ? item.color : "#333"}
          />
          <Text
            style={[
              styles.text,
              item.color ? { color: item.color } : {},
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2", padding: 10 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    gap: 10,
    elevation: 2,
  },
  text: { fontSize: 16 },
});