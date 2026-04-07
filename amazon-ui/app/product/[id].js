import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

// Same product list as ProductList.js
const products = [
  { id: "1", name: "iPhone 14", price: "₹79,999", image: require("../../assets/images/iphone14.jpg"), description: "Apple iPhone 14 with A15 Bionic chip, 6.1-inch display, and advanced camera." },
  { id: "2", name: "Samsung M34", price: "₹18,999", image: require("../../assets/images/samsungM34.jpg"), description: "Samsung Galaxy M34 with 6000mAh battery, smooth performance, and 6.6-inch screen." },
  { id: "3", name: "T-Shirt", price: "₹499", image: require("../../assets/images/Tshirt.jpg"), description: "Comfortable cotton T-shirt, available in multiple colors and sizes." },
  { id: "4", name: "Shoes", price: "₹999", image: require("../../assets/images/sportShoes.jpg"), description: "Running sports shoes with lightweight and durable sole." },
  { id: "5", name: "Smart Watch", price: "₹2,499", image: require("../../assets/images/smartWatch.jpg"), description: "Track your fitness daily with notifications and heart rate monitor." },
  { id: "6", name: "Smart TV", price: "₹80,499", image: require("../../assets/images/smartTV.jpg"), description: "4K Ultra HD Smart TV with HDR, WiFi connectivity, and apps support." }
];

export default function ProductDetails() {
  const { id } = useLocalSearchParams();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={product.image} style={styles.image} />

      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.desc}>{product.description}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  price: {
    color: "#B12704",
    fontSize: 18,
    marginTop: 5,
  },
  desc: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#FFD814",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});