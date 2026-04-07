import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const products = [
  { id: "1", name: "iPhone 14", price: "₹79,999", rating: 4.5, image: require("../../assets/images/iphone14.jpg"), category: "mobiles" },
  { id: "2", name: "Samsung M34", price: "₹18,999", rating: 4.2, image: require("../../assets/images/samsungM34.jpg"), category: "mobiles" },
  { id: "3", name: "T-Shirt", price: "₹499", rating: 4.0, image: require("../../assets/images/Tshirt.jpg"), category: "fashion" },
  { id: "4", name: "Shoes", price: "₹999", rating: 4.3, image: require("../../assets/images/sportShoes.jpg"), category: "fashion" },
  { id: "5", name: "Smart Watch", price: "₹2,499", rating: 4.1, image: require("../../assets/images/smartWatch.jpg"), category: "electronics" },
  { id: "6", name: "Smart TV", price: "₹80,499", rating: 4.6, image: require("../../assets/images/smartTV.jpg"), category: "electronics" },
  { id: "7", name: "makeupKit", price: "₹1,499", rating: 4.6, image: require("../../assets/images/makeupKit.jpg"), category: "beauty" },
    { id: "8", name: "Lotion&Serum", price: "₹2,499", rating: 4.6, image: require("../../assets/images/Lotions.jpg"), category: "beauty" }
];

export default function ProductList({ selectedCategory }) {
  const filteredProducts =
    selectedCategory === null
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <FlatList
      data={filteredProducts}
      keyExtractor={(item) => item.id}
      numColumns={2}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} />

          <Text style={styles.name} numberOfLines={2}>
            {item.name}
          </Text>

          {/* ⭐ Rating */}
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color="#FFA41C" />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>

          {/* 💰 Price */}
          <Text style={styles.price}>{item.price}</Text>

          {/* 🛒 Add to Cart */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  rating: {
    marginLeft: 4,
    fontSize: 12,
  },
  price: {
    color: "#B12704",
    fontWeight: "bold",
    marginTop: 5,
  },
  button: {
    marginTop: 8,
    backgroundColor: "#FFD814",
    padding: 6,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "bold",
  },
});