import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { getCosmetics } from "../services/api";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getCosmetics();
    setProducts(data);
  };

  const filtered = products.filter(p => (p.title || "").toLowerCase().includes(search.toLowerCase()));

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.brand}>GlowCart</Text>
        <Text style={styles.profileLink} onPress={() => navigation.navigate("Profile")}>Profile</Text>
      </View>
      <TextInput placeholder="Search products..." style={styles.search} value={search} onChangeText={setSearch} />
      <FlatList
        data={filtered}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Details", { product: item })}>
            <View style={styles.card}>
              <Image source={{ uri: item.thumbnail }} style={styles.image} />
              <View style={styles.row}>
                <Text style={styles.name} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: "#fff" },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  brand: { fontSize: 22, fontWeight: "800" },
  profileLink: { color: "#e91e63", fontWeight: "700" },
  search: { borderWidth: 1, borderColor: "#ddd", padding: 12, borderRadius: 10, marginBottom: 10 },
  card: { padding: 10, borderRadius: 12, backgroundColor: "#fafafa", marginBottom: 10, elevation: 1 },
  image: { width: "100%", height: 160, borderRadius: 10, marginBottom: 8, backgroundColor: "#eee" },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  name: { fontSize: 16, flex: 1, marginRight: 6 },
  price: { fontSize: 16, fontWeight: "bold", color: "#e91e63" }
});
