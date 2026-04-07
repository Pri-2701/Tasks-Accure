import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";

const orders = [
  {
    id: 1,
    title: "Smart TV 42 inch",
    price: 25000,
    image: require("../../../assets/images/smartTV.jpg"),
    status: "Delivered",
  },
  {
    id: 2,
    title: "Men's T-Shirt",
    price: 499,
    image: require("../../../assets/images/Tshirt.jpg"),
    status: "Shipped",
  },
];

export default function Orders() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Orders</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />

            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>₹{item.price}</Text>
              <Text
                style={[
                  styles.status,
                  item.status === "Delivered"
                    ? { color: "green" }
                    : { color: "orange" },
                ]}
              >
                {item.status}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#f2f2f2" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
  },
  image: { width: 80, height: 80, resizeMode: "contain" },
  title: { fontSize: 16, fontWeight: "bold" },
  price: { marginVertical: 5, color: "green" },
  status: { fontSize: 14 },
});