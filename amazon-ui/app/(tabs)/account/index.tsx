import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Account() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Account</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/account/profile1")}
      >
        <Text style={styles.text}>👤 Profile 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/account/profile2")}
      >
        <Text style={styles.text}>👤 Profile 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  text: { fontSize: 16 },
});