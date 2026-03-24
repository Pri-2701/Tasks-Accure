import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Enter email & password");
      return;
    }
    Alert.alert("Success", "Login Successful");
  };

  return (
    <View style={styles.container}>

      {/* ✅ FULL BACKGROUND IMAGE */}
      <Image
        source={require("../assets/images/City.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* ✅ DARK OVERLAY */}
      <View style={styles.overlay} />

      {/* ✅ LOGIN CARD */}
      <View style={styles.card}>

        {/* LOGO */}
        <View style={styles.logoRow}>
          <View style={styles.logoBox} />
          <Text style={styles.logoText}>mygate</Text>
        </View>

        <Text style={styles.title}>Sign in</Text>

        {/* EMAIL */}
        <TextInput
          placeholder="Email *"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        {/* PASSWORD */}
        <TextInput
          placeholder="Password *"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* BUTTON */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        {/* LINKS */}
        <View style={styles.linkRow}>
          <Text style={styles.link}>Forgot password?</Text>
          <Text style={styles.link}>Sign Up</Text>
        </View>

        {/* FOOTER */}
        <Text style={styles.footer}>
          Terms of Use • Privacy Policy
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  card: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 16,
    elevation: 8,
  },

  logoRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  logoBox: {
    width: 28,
    height: 28,
    backgroundColor: "#000",
    marginRight: 8,
  },

  logoText: {
    fontSize: 22,
    fontWeight: "600",
  },

  title: {
    textAlign: "center",
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#fafafa",
  },

  button: {
    backgroundColor: "#cfcfcf",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#555",
    fontWeight: "600",
  },

  linkRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  link: {
    color: "#555",
    fontSize: 13,
  },

  footer: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 12,
    color: "#888",
  },
});