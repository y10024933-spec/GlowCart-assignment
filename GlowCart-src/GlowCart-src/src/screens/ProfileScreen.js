import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.info}>Name: Demo User</Text>
      <Text style={styles.info}>Email: demo@glowcart.com</Text>

      <Text style={styles.section}>Address</Text>
      <Text style={styles.section}>Order History</Text>
      <Text style={styles.section}>Language</Text>
      <Text style={styles.section}>Notifications</Text>
      <Text style={styles.section}>Contact Us</Text>
      <Text style={styles.section}>Get Help</Text>
      <Text style={styles.section}>Privacy Policy</Text>
      <Text style={styles.section}>Terms & Conditions</Text>
      <Text style={styles.logout}>Logout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  info: { fontSize: 16, marginBottom: 10 },
  section: { fontSize: 18, marginVertical: 8, color: "#333" },
  logout: { fontSize: 18, marginTop: 20, color: "red", fontWeight: "bold" }
});
