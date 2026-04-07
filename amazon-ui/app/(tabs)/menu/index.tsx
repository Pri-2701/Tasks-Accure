import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Menu() {
  const router = useRouter();

  const menuItems = [
    { title: "My Orders", icon: "cube-outline", path: "/orders" },
    { title: "My Account", icon: "person-outline", path: "/account" },
    { title: "Wishlist", icon: "heart-outline", path: "/menu/wishlist" },
    { title: "Settings", icon: "settings-outline", path: "/menu/setting" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Menu</Text>

      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => router.push(item.path)}
        >
          <Ionicons name={item.icon as any} size={24} color="#333" />
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    marginLeft: 15,
    fontSize: 16,
  },
});