import React from "react";
import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";

export default function ProductDetails({ route }) {
  const { product } = route.params;

  const highlights = [
    "Dimensions: 10 x 5 x 3 cm",
    "Warranty: 6 months",
    "Shipping: 3–5 business days"
  ];

  const reviews = [
    { id: 1, user: "Asha", text: "Loved the texture and finish!", rating: 5 },
    { id: 2, user: "Meera", text: "Good for daily use.", rating: 4 }
  ];

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.desc}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>

      <Text style={styles.section}>Highlights</Text>
      {highlights.map((h, i) => (
        <Text key={i} style={styles.item}>• {h}</Text>
      ))}

      <Text style={styles.section}>Ratings & Reviews</Text>
      {reviews.map((r) => (
        <View key={r.id} style={styles.review}>
          <Text style={styles.reviewUser}>{r.user}</Text>
          <Text style={styles.reviewText}>{r.text}</Text>
          <Text style={styles.reviewRating}>Rating: {r.rating}/5</Text>
        </View>
      ))}

      <View style={{ marginVertical: 12 }}>
        <Button title="Add to Bag" onPress={() => alert("Added to Cart")} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  image: { width: "100%", height: 260, borderRadius: 12, marginBottom: 12, backgroundColor: "#eee" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 6 },
  desc: { fontSize: 16, color: "#555", marginBottom: 6 },
  price: { fontSize: 20, fontWeight: "bold", color: "#e91e63", marginBottom: 12 },
  section: { fontSize: 18, fontWeight: "700", marginTop: 10, marginBottom: 6 },
  item: { fontSize: 15, color: "#444", marginBottom: 4 },
  review: { paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: "#eee" },
  reviewUser: { fontWeight: "700" },
  reviewText: { color: "#444" },
  reviewRating: { color: "#111", marginTop: 2 }
});
