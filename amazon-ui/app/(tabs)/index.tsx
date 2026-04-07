import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import Header from "../../components/ui/Header";
import Banner from "../../components/ui/Banner";
import CategoryList from "../../components/ui/CategoryList";
import ProductList from "../../components/ui/ProductList";

export default function Home() {
  const [category, setCategory] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Banner />
        <CategoryList setCategory={setCategory} />

        {/* ProductList shows actual products */}
        <ProductList selectedCategory={category} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2" },
});