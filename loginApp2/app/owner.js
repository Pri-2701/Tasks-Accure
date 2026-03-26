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

export default function Owner() {
  const router = useRouter();

  // States
  const [ownerName, setOwnerName] = useState("");
  const [property, setProperty] = useState("");
  const [flatNo, setFlatNo] = useState("");
  const [bhk, setBhk] = useState("1BHK");
  const [properties, setProperties] = useState([]);

  const [payment, setPayment] = useState("");
  const [payments, setPayments] = useState([]);

  // Add Property
  const addProperty = () => {
    if (!ownerName.trim() || !property.trim() || !flatNo.trim()) {
      alert("Enter all details");
      return;
    }

    const newProperty = {
      id: Date.now().toString(),
      owner: ownerName,
      name: property,
      flat: flatNo,
      bhk: bhk,
    };

    setProperties((prev) => [newProperty, ...prev]);

    setProperty("");
    setFlatNo("");
  };

  // Add Payment
  const addPayment = () => {
    if (!payment.trim() || !ownerName.trim()) {
      alert("Enter payment & owner name");
      return;
    }

    const newPayment = {
      id: Date.now().toString(),
      owner: ownerName,
      amount: payment,
      time: new Date().toLocaleString(),
    };

    setPayments((prev) => [newPayment, ...prev]);
    setPayment("");
  };

  // Delete
  const deleteItem = (id, type) => {
    if (type === "property") {
      setProperties((prev) => prev.filter((item) => item.id !== id));
    } else {
      setPayments((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Owner Dashboard</Text>

      {/* Owner Name */}
      <TextInput
        placeholder="Enter Owner Name"
        style={styles.input}
        value={ownerName}
        onChangeText={setOwnerName}
      />

      {ownerName ? (
        <Text style={styles.ownerText}>👤 {ownerName}</Text>
      ) : null}

      {/* PROPERTY SECTION */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Properties</Text>

        <TextInput
          placeholder="Enter Property Name"
          style={styles.input}
          value={property}
          onChangeText={setProperty}
        />

        <TextInput
          placeholder="Enter Flat Number (A-101)"
          style={styles.input}
          value={flatNo}
          onChangeText={setFlatNo}
        />

        {/* BHK Selection */}
        <View style={styles.bhkRow}>
          {["1BHK", "2BHK", "3BHK"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.bhkBtn,
                bhk === item && styles.activeBhk,
              ]}
              onPress={() => setBhk(item)}
            >
              <Text
                style={{
                  color: bhk === item ? "#fff" : "#2196F3",
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.addBtn} onPress={addProperty}>
          <Text style={styles.btnText}>Add Property</Text>
        </TouchableOpacity>

        <FlatList
          data={properties}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text>No properties yet</Text>}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <View>
                <Text style={{ fontWeight: "600" }}>
                  {item.name}
                </Text>
                <Text>Flat: {item.flat}</Text>
                <Text>BHK: {item.bhk}</Text>
                <Text style={styles.subText}>
                  Owner: {item.owner}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => deleteItem(item.id, "property")}
              >
                <Text style={{ color: "#fff" }}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* PAYMENT SECTION */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Payments</Text>

        <TextInput
          placeholder="Enter Amount"
          style={styles.input}
          value={payment}
          onChangeText={setPayment}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.addBtn} onPress={addPayment}>
          <Text style={styles.btnText}>Add Payment</Text>
        </TouchableOpacity>

        <FlatList
          data={payments}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text>No payments yet</Text>}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <View>
                <Text style={{ fontWeight: "600" }}>
                  ₹{item.amount}
                </Text>
                <Text style={styles.subText}>
                  Owner: {item.owner}
                </Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>

              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => deleteItem(item.id, "payment")}
              >
                <Text style={{ color: "#fff" }}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* Buttons */}
      <TouchableOpacity
         style={styles.back}
                onPress={() => router.replace("/login")}
              >
                <Text style={styles.logoutText}>⬅ Back</Text>
      </TouchableOpacity>

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
    backgroundColor: "#f5f7fa",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  ownerText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 4,
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

  bhkRow: {
    flexDirection: "row",
    marginBottom: 10,
  },

  bhkBtn: {
    borderWidth: 1,
    borderColor: "#2196F3",
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },

  activeBhk: {
    backgroundColor: "#2196F3",
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
    padding: 10,
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