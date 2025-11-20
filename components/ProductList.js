import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import ProductCard from './ProductCard';

const PRODUCTS = [
    {
        id: '1',
        title: 'Baskets Vintage',
        price: '89,99 €',
        description: 'Description, Vintage dirvest compronge rreiveus. Style unique et confort exceptionnel pour vos sorties.',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
        id: '2',
        title: 'Casque Audio Premium',
        price: '199,00 €',
        description: 'Son haute fidélité avec réduction de bruit active. Idéal pour les voyages et le travail.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
        id: '3',
        title: 'Montre Connectée',
        price: '149,50 €',
        description: 'Suivez votre activité physique et recevez vos notifications directement à votre poignet.',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
        id: '4',
        title: 'Appareil Photo Retro',
        price: '450,00 €',
        description: 'Capturez vos meilleurs moments avec ce design intemporel et une qualité d\'image moderne.',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
];

const ProductList = () => {
    const [totalPrice, setTotalPrice] = useState(0);

    const parsePrice = (priceStr) => {
        // Remove currency symbol and replace comma with dot
        const numericString = priceStr.replace(' €', '').replace(',', '.').replace(/\s/g, '');
        return parseFloat(numericString);
    };

    const handleBuy = (productTitle, priceStr) => {
        const price = parsePrice(priceStr);
        setTotalPrice((prevTotal) => prevTotal + price);
        console.log(`Achat initié pour : ${productTitle} (${price} €)`);
    };

    const renderItem = ({ item }) => (
        <ProductCard
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
            onBuy={() => handleBuy(item.title, item.price)}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.totalPanel}>
                <Text style={styles.totalText}>Total: {totalPrice.toFixed(2).replace('.', ',')} €</Text>
            </View>
            <FlatList
                data={PRODUCTS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    listContent: {
        paddingBottom: 20,
    },
    totalPanel: {
        backgroundColor: 'white',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        zIndex: 10,
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default ProductList;
