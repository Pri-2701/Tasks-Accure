import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function Amenities() {

  const bookings = [
    { id: '1', name: 'Swimming Pool', date: '26 Mar 2026', time: '10:00 AM' },
    { id: '2', name: 'Club House', date: '27 Mar 2026', time: '05:00 PM' },
    { id: '3', name: 'Gym', date: '28 Mar 2026', time: '07:00 AM' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>

      {/* Header */}
      <View style={styles.row}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.badge}>Booked</Text>
      </View>

      {/* Details */}
      <View style={styles.details}>
        <Text style={styles.text}>📅 {item.date}</Text>
        <Text style={styles.text}>⏰ {item.time}</Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>View Details</Text>
      </TouchableOpacity>

    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amenities Booking</Text>

      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#EEF2F7',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  badge: {
    backgroundColor: '#2F80ED',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    fontSize: 12,
    overflow: 'hidden',
  },

  details: {
    marginBottom: 12,
  },

  text: {
    color: '#555',
    marginTop: 3,
  },

  button: {
    backgroundColor: '#27AE60',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});