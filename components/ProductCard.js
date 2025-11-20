import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductCard = ({ image, title, price, description, onBuy }) => {
  return (
    <View style={styles.card}>
      {/* 2. Image (Haut de la carte) */}
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />

      <View style={styles.content}>
        {/* 3. Titre + Prix (Row + Space-between) */}
        <View style={styles.headerRow}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>

        {/* 4. Description courte */}
        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>

        {/* 5. Bouton "Acheter" (Centré en bas) */}
        <TouchableOpacity style={styles.button} onPress={onBuy}>
          <Text style={styles.buttonText}>Acheter maintenant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // 1. Conteneur (Fond blanc, coins arrondis, ombre légère)
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
    overflow: 'hidden', // Ensures image respects border radius
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    flex: 1, // Allow text to wrap if needed
    marginRight: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e91e63', // Accent color
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#4CAF50', // Green button
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center', // Center horizontally
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductCard;
