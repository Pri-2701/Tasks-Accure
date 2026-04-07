import { View, Text, StyleSheet } from "react-native";

export default function Profile1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👤 User Profile 1</Text>
      <Text>Name: John Doe</Text>
      <Text>Email: john@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  text: { fontSize: 20, marginBottom: 10 },
});