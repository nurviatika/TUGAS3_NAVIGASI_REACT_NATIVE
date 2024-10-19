import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    DetailExample: { 
        message: string; 
        name: string; 
        description: string; 
        image: any; 
        price: string; 
        rating: number; 
    };
    DetailOrder: { 
        name: string; 
        image: any; 
        price: string; 
    };
};

type DetailExampleProps = {
    route: RouteProp<RootStackParamList, 'DetailExample'>;
    navigation: StackNavigationProp<RootStackParamList, 'DetailExample'>;
};

const DetailExample: React.FC<DetailExampleProps> = ({ route, navigation }) => {
    const { name, description, image, price, rating } = route.params;

    const [liked, setLiked] = useState(false);
    const toggleLike = () => {
    setLiked(!liked);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/back.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>DETAIL</Text>
                <TouchableOpacity onPress={toggleLike}>
                    <Image 
                        source={liked ? require('../../assets/favorite.png') : require('../../assets/favorite.png')}
                        style={[styles.hearticon, liked && styles.dislikeIcon]}
                    />
                </TouchableOpacity>
            </View>

            <Image source={image} style={styles.image} />

            <Text style={styles.title}>{name}</Text>
            <Text style={styles.cobaaja}>{description}</Text>

            <View style={styles.ratingContainer}>
                <Image source={require("../../assets/star.png")} style={styles.iconSmall} />
                <Text style={styles.rating}>{rating}</Text>
                <Text style={styles.ratingCount}>(230)</Text>
                <Image source={require("../../assets/leaf.png")} style={styles.iconSmall} />
                <Image source={require("../../assets/milk.png")} style={styles.iconSmall} />
            </View>

            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>
            Cake matcha adalah kue yang menggunakan bubuk matcha, yaitu teh hijau Jepang, sebagai bahan utamanya. Cake ini memiliki rasa unik yang sedikit pahit namun tetap lembut dan manis, dengan aroma khas daun teh hijau.
                <Text style={styles.readMore}> Read More</Text>
            </Text>


            <Text style={styles.sectionTitle}>Size</Text>
            <View style={styles.sizeContainer}>
                {['S', 'M', 'L'].map((size, index) => (
                    <View key={index} style={styles.sizeBox}>
                        <Text style={styles.sizeText}>{size}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.footer}>
                <View>
                    <Text style={styles.priceLabel}>Price</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
                <TouchableOpacity 
                    style={styles.buyButton}
                onPress={() => navigation.navigate('DetailOrder', { name, image, price })}>
                    <Text style={styles.buyButtonText}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default DetailExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5EBE3FF',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: "#4d6147",
        marginBottom: 17,
    },
    icon: {
        width: 26,
        height: 24,
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 20,
        marginBottom: 15,
    },
    hearticon: {
        tintColor: "green",
        width: 24,
        height: 24,
    },
    dislikeIcon: {
        tintColor: "grey",
    },

    cobaaja: {
        color: '#7a9472',
        fontFamily: 'sora',
        fontSize: 16,
        fontWeight: '400',
    },

    title: {
        fontSize: 25,
        fontWeight: '600',
        color: "#4d6147",
        marginBottom: 1,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    iconSmall: {
        width: 20,
        height: 20,
        marginHorizontal: 6,
    },
    rating: {
        fontSize: 16,
        color: '#4d6147',
    },
    ratingCount: {
        marginLeft: 5,
        color: '#4d6147',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#4d6147',
        marginBottom: 17,
    },
    description: {
        fontSize: 14,
        color: '#88A47F',
        lineHeight: 20,
        marginBottom: 25,
    },
    readMore: {
        color: '#728f67',
        fontWeight: '500',
    },
    sizeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
    },
    sizeBox: {
        width: 110,
        height: 43,
        borderWidth: 1,
        borderColor: '#afc2a8',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sizeText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#7a9472',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceLabel: {
        fontSize: 14,
        color: '#7a9472',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#88A47F',
    },
    buyButton: {
        backgroundColor: '#afc2a8',
        width: 217,
        height: 62,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buyButtonText: {
        color: '#4d6147',
        fontSize: 16,
        fontWeight: '600',
    },
});
