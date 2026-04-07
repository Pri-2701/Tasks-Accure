import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/amazonBanner.jpg")}
        style={styles.banner}
        resizeMode="cover" // ✅ fill like Amazon
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  banner: {
    width: width,   // ✅ full screen
    height: width * 0.45, // ✅ perfect ratio (IMPORTANT)
  },
});