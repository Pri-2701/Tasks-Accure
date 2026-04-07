import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const categories = [ "all","mobiles", "fashion", "electronics", "beauty"];

export default function CategoryList({ setCategory }) {
  return (
    <View style={styles.container}>
      {categories.map((cat) => (
        <TouchableOpacity key={cat} onPress={() => setCategory(cat)}>
          <Text style={styles.item}>{cat}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#eee",
  },
  item: {
    fontSize: 14,
    fontWeight: "bold",
  },
});