import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        {/* Search Icon */}
        <Ionicons name="search" size={20} color="gray" />

        {/* Input */}
        <TextInput
          placeholder="Search Amazon.in"
          style={styles.input}
        />

        {/* Camera Icon */}
        <Ionicons name="camera-outline" size={22} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00A8E1", // Amazon blue
    padding: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
  },
});