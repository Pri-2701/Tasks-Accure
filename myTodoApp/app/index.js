import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task || !dateTime) return;

    const newTask = {
      id: Date.now().toString(),
      title: task,
      date: dateTime,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setTask("");
    setDateTime("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    const updated = tasks.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTasks(updated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Tasks</Text>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter task..."
          value={task}
          onChangeText={setTask}
          style={styles.input}
        />

        <TextInput
          placeholder="Date & Time (e.g. 20 Mar 5PM)"
          value={dateTime}
          onChangeText={setDateTime}
          style={styles.input}
        />

        <TouchableOpacity style={styles.addBtn} onPress={addTask}>
          <Text style={styles.addText}>+ Add Task</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text
                style={[
                  styles.taskText,
                  item.completed && styles.completedText,
                ]}
              >
                {item.title}
              </Text>
              <Text style={styles.dateText}>📅 {item.date}</Text>
            </View>

            <View style={styles.actions}>
              <TouchableOpacity
                style={[
                  styles.statusBtn,
                  item.completed ? styles.doneBtn : styles.pendingBtn,
                ]}
                onPress={() => toggleComplete(item.id)}
              >
                <Text style={styles.btnText}>
                  {item.completed ? "Completed" : "Pending"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

// 🎨 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    paddingTop: 50,
    paddingHorizontal: 15,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#111827",
  },

  inputContainer: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  input: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#f9fafb",
  },

  addBtn: {
    backgroundColor: "#6366f1",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  addText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2,
  },

  taskText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  completedText: {
    textDecorationLine: "line-through",
    color: "#9ca3af",
  },

  dateText: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusBtn: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 8,
  },

  doneBtn: {
    backgroundColor: "#22c55e",
  },

  pendingBtn: {
    backgroundColor: "#f59e0b",
  },

  btnText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  delete: {
    fontSize: 18,
    color: "#ef4444",
    fontWeight: "bold",
  },
});