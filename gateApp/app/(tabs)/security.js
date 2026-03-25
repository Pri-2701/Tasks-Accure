import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Security() {

  const logs = [
    { id: '1', name: 'Rahul Sharma', time: '10:30 AM', status: 'Allowed' },
    { id: '2', name: 'Amit Kumar', time: '11:15 AM', status: 'Denied' },
    { id: '3', name: 'Neha Verma', time: '12:00 PM', status: 'Allowed' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>

      <Text
        style={[
          styles.status,
          { color: item.status === 'Allowed' ? 'green' : 'red' },
        ]}
      >
        {item.status}
      </Text>

    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Security Logs</Text>

      <FlatList
        data={logs}
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
    backgroundColor: '#F4F6FA',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
  },

  time: {
    color: '#666',
    marginTop: 3,
  },

  status: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});