import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function Wallet() {
  const [balance, setBalance] = useState(500);

  const transactions = [
    { id: 1, title: "Added Money", amount: "+₹500" },
    { id: 2, title: "Order Payment", amount: "-₹299" },
    { id: 3, title: "Refund", amount: "+₹150" },
  ];

  const addMoney = () => {
    setBalance(balance + 100);
  };

  return (
    <View style={styles.container}>
      {/* Balance Card */}
      <View style={styles.card}>
        <Text style={styles.label}>Wallet Balance</Text>
        <Text style={styles.balance}>₹{balance}</Text>

        <TouchableOpacity style={styles.addBtn} onPress={addMoney}>
          <Text style={styles.addText}>+ Add Money</Text>
        </TouchableOpacity>
      </View>

      {/* Transactions */}
      <Text style={styles.historyTitle}>Transaction History</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.txn}>
            <Text>{item.title}</Text>
            <Text
              style={{
                color: item.amount.includes("+") ? "green" : "red",
              }}
            >
              {item.amount}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  card: {
    backgroundColor: "#232f3e",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: {
    color: "#fff",
    fontSize: 14,
  },
  balance: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 10,
  },
  addBtn: {
    backgroundColor: "#febd69",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  addText: {
    fontWeight: "bold",
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  txn: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});