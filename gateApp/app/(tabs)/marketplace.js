import { View, Text, Image, StyleSheet } from 'react-native';

export default function Marketplace() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
           source={require('../../assets/images/Fruit.jpg')}
          style={styles.image}
            resizeMode="cover"
        />
        <Text>Fruits shop</Text>
      </View>

      <View style={styles.card}>
        <Image
           source={require('../../assets/images/Vegetables.jpg')}
          style={styles.image}
            resizeMode="cover"
        />
        <Text>Vegetables shop</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { padding: 15, backgroundColor: '#F4F6FA', flex: 1 },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  
});