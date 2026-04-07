import { View, Text, StyleSheet } from "react-native";

export default function Profile2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👤 User Profile 2</Text>
      <Text>Phone: +91 9876543210</Text>
      <Text>Address: 123, Main Street, City</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  text: { fontSize: 20, marginBottom: 10 },
});