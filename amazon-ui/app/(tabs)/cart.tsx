import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const initialCart = [
  {
    id: 1,
    title: "Smart TV",
    price: 25000,
    qty: 1,
    image: require("../../assets/images/smartTV.jpg"),
  },
  {
    id: 2,
    title: "T-Shirt",
    price: 499,
    qty: 2,
    image: require("../../assets/images/Tshirt.jpg"),
  },
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />

            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>₹{item.price}</Text>

              <View style={styles.qtyRow}>
                <TouchableOpacity
                  onPress={() => decreaseQty(item.id)}
                  style={styles.btn}
                >
                  <Text>-</Text>
                </TouchableOpacity>

                <Text style={styles.qty}>{item.qty}</Text>

                <TouchableOpacity
                  onPress={() => increaseQty(item.id)}
                  style={styles.btn}
                >
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      {/* Bottom Total Section */}
      <View style={styles.bottom}>
        <Text style={styles.total}>Total: ₹{total}</Text>

        <TouchableOpacity style={styles.checkout}>
          <Text style={styles.checkoutText}>Proceed to Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 10,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    marginVertical: 5,
    color: "green",
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#ddd",
    padding: 5,
    borderRadius: 5,
    width: 30,
    alignItems: "center",
  },
  qty: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderTopWidth: 0.5,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkout: {
    backgroundColor: "#febd69",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutText: {
    fontWeight: "bold",
  },
});