import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.tagline}>Your Beauty, Delivered</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff", padding: 24 },
  logo: { width: 160, height: 160, marginBottom: 20 },
  tagline: { fontSize: 20, fontWeight: "600", marginBottom: 30 },
  button: { backgroundColor: "#e91e63", paddingVertical: 14, paddingHorizontal: 28, borderRadius: 12, elevation: 2 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 }
});
