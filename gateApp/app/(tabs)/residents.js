import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Residents() {

  const data = [
    { id: '1', name: 'John Doe', flat: 'A-101', status: 'Owner' },
    { id: '2', name: 'David Smith', flat: 'B-202', status: 'Tenant' },
    { id: '3', name: 'Neha Verma', flat: 'C-303', status: 'Owner' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.flat}>Flat: {item.flat}</Text>
      </View>

      <Text
        style={[
          styles.status,
          { color: item.status === 'Owner' ? 'green' : 'orange' },
        ]}
      >
        {item.status}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Residents</Text>

      <FlatList
        data={data}
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

  flat: {
    color: '#666',
    marginTop: 3,
  },

  status: {
    fontWeight: 'bold',
  },
});