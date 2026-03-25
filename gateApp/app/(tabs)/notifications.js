import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

export default function Notifications() {

  const data = [
    { id: '1', name: 'Rahul Sharma', status: 'Pending' },
    { id: '2', name: 'Amit Kumar', status: 'Pending' },
    { id: '3', name: 'Neha Verma', status: 'Pending' },
  ];

  const handleApprove = (name) => {
    Alert.alert('Approved', `${name} allowed ✅`);
  };

  const handleReject = (name) => {
    Alert.alert('Rejected', `${name} denied ❌`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.approve}
          onPress={() => handleApprove(item.name)}
        >
          <Text style={styles.btnText}>Approve</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.reject}
          onPress={() => handleReject(item.name)}
        >
          <Text style={styles.btnText}>Reject</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

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
  },

  name: {
    fontSize: 16,
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  approve: {
    backgroundColor: '#27AE60',
    padding: 10,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },

  reject: {
    backgroundColor: '#EB5757',
    padding: 10,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});