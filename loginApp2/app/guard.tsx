import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Guard() {
  const router = useRouter();

  // STATES
  const [guardName, setGuardName] = useState("");
  const [visitor, setVisitor] = useState("");
  const [logs, setLogs] = useState([]);

  // ADD LOG
  const handleEntry = (status) => {
    if (!guardName || !visitor) {
      alert("Enter guard & visitor name");
      return;
    }

    const newLog = {
      id: Date.now().toString(),
      guard: guardName,
      visitor: visitor,
      status: status,
      time: new Date().toLocaleString(),
    };

    setLogs([newLog, ...logs]);
    setVisitor("");
  };

  // DELETE LOG
  const deleteLog = (id) => {
    setLogs(logs.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guard Dashboard</Text>

      {/* GUARD NAME */}
      <TextInput
        placeholder="Enter Guard Name"
        style={styles.input}
        value={guardName}
        onChangeText={setGuardName}
      />

      {guardName ? (
        <Text style={styles.guardText}>👮 {guardName}</Text>
      ) : null}

      {/* VISITOR ENTRY */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Visitor Entry</Text>

        <TextInput
          placeholder="Enter Visitor Name"
          style={styles.input}
          value={visitor}
          onChangeText={setVisitor}
        />

        {/* APPROVE / REJECT */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.approveBtn}
            onPress={() => handleEntry("Approved")}
          >
            <Text style={styles.btnText}>Approve</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rejectBtn}
            onPress={() => handleEntry("Rejected")}
          >
            <Text style={styles.btnText}>Reject</Text>
          </TouchableOpacity>
        </View>

        {/* LOGS LIST */}
        <FlatList
          data={logs}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text>No logs yet</Text>}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <View>
                <Text style={{ fontWeight: "bold" }}>
                  {item.visitor}
                </Text>
                <Text style={styles.subText}>
                  Guard: {item.guard}
                </Text>

                <Text
                  style={{
                    color:
                      item.status === "Approved"
                        ? "green"
                        : "red",
                    fontWeight: "600",
                  }}
                >
                  {item.status}
                </Text>

                <Text style={styles.time}>{item.time}</Text>
              </View>

              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => deleteLog(item.id)}
              >
                <Text style={{ color: "#fff" }}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* BACK */}
      <TouchableOpacity
        style={styles.back}
        onPress={() => router.replace("/login")}
      >
        <Text style={styles.logoutText}>⬅ Back</Text>
      </TouchableOpacity>

      {/* LOGOUT */}
      <TouchableOpacity
        style={styles.logout}
        onPress={() => router.replace("/login")}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f6f8",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  guardText: {
    marginBottom: 10,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  approveBtn: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
    alignItems: "center",
  },

  rejectBtn: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  subText: {
    fontSize: 12,
    color: "gray",
  },

  time: {
    fontSize: 12,
    color: "gray",
  },

  deleteBtn: {
    backgroundColor: "#555",
    padding: 6,
    borderRadius: 6,
  },

  back: {
    backgroundColor: "#555",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },

  logout: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
});