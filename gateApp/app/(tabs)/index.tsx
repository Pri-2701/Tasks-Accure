import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  const features = [
    { name: 'Notifications', icon: 'notifications', route: '/notifications' },
    { name: 'Residents', icon: 'people', route: '/residents' },
    { name: 'Security', icon: 'shield-checkmark', route: '/security' },
    { name: 'Marketplace', icon: 'cart', route: '/marketplace' },
    { name: 'Amenities', icon: 'calendar', route: '/amenities' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🏡 My Gate</Text>

      {features.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => router.push(item.route)}
        >
          <Ionicons name={item.icon} size={26} color="#2F80ED" />
          <Text style={styles.text}>{item.name}</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEF2F7',
    padding: 15,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,

    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  text: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '600',
  },
});