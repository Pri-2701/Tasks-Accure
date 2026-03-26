import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  const [role, setRole] = useState("Admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      alert("Please enter username & password");
      return;
    }

    if (role === "Admin") router.replace("/admin");
    else if (role === "Owner") router.replace("/owner");
    else router.replace("/guard");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome 👋</Text>
        <Text style={styles.subtitle}>Login to continue</Text>

        {/* Username */}
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        {/* Password */}
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        {/* Role Selection */}
        <Text style={styles.label}>Select Role</Text>

        <View style={styles.roleContainer}>
          {["Admin", "Owner", "Guard"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.roleBtn,
                role === item && styles.activeRole,
              ]}
              onPress={() => setRole(item)}
            >
              <Text
                style={[
                  styles.roleText,
                  role === item && { color: "#fff" },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f7",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  label: {
    marginBottom: 8,
    fontWeight: "600",
  },
  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  roleBtn: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4CAF50",
    alignItems: "center",
  },
  activeRole: {
    backgroundColor: "#4CAF50",
  },
  roleText: {
    color: "#4CAF50",
    fontWeight: "600",
  },
  loginBtn: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});