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

export default function Admin() {
  const router = useRouter();

  // STATES
  const [adminName, setAdminName] = useState("");
  const [report, setReport] = useState("");
  const [rating, setRating] = useState(1);
  const [reports, setReports] = useState([]);

  // ADD REPORT
  const addReport = () => {
    if (!adminName || !report) {
      alert("Enter admin name & report");
      return;
    }

    const newReport = {
      id: Date.now().toString(),
      admin: adminName,
      text: report,
      rating: rating,
      time: new Date().toLocaleString(),
    };

    setReports([newReport, ...reports]);
    setReport("");
    setRating(1);
  };

  // DELETE
  const deleteReport = (id) => {
    setReports(reports.filter((item) => item.id !== id));
  };

  // STAR UI
  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((num) => (
      <TouchableOpacity key={num} onPress={() => setRating(num)}>
        <Text style={styles.star}>
          {num <= rating ? "⭐" : "☆"}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>

      {/* ADMIN NAME */}
      <TextInput
        placeholder="Enter Admin Username"
        style={styles.input}
        value={adminName}
        onChangeText={setAdminName}
      />

      {adminName ? (
        <Text style={styles.adminText}>👑 {adminName}</Text>
      ) : null}

      {/* REPORT SECTION */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Reports</Text>

        <TextInput
          placeholder="Enter report"
          style={styles.input}
          value={report}
          onChangeText={setReport}
        />

        {/* ⭐ RATING */}
        <View style={styles.starRow}>{renderStars()}</View>

        <TouchableOpacity style={styles.addBtn} onPress={addReport}>
          <Text style={styles.btnText}>Add Report</Text>
        </TouchableOpacity>

        <FlatList
          data={reports}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text>No reports yet</Text>}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <View>
                <Text style={{ fontWeight: "bold" }}>
                  {item.text}
                </Text>

                <Text>
                  Rating: {"⭐".repeat(item.rating)}
                </Text>

                <Text style={styles.subText}>
                  Admin: {item.admin}
                </Text>

                <Text style={styles.time}>{item.time}</Text>
              </View>

              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => deleteReport(item.id)}
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

  adminText: {
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

  starRow: {
    flexDirection: "row",
    marginBottom: 10,
  },

  star: {
    fontSize: 24,
    marginRight: 5,
  },

  addBtn: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
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
    backgroundColor: "red",
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