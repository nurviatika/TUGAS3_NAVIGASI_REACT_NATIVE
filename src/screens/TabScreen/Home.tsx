import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { View, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const products = [
    { id: '1', name: 'cake Matcha', description: 'with matcha', image: require('../../assets/cake.png'), price: '$4.50', rating: 4.8 },
    { id: '2', name: 'Coffe Matcha', description: 'with matcha', image: require('../../assets/coffee_matcha.png'), price: '$3.80', rating: 4.9 },
    { id: '3', name: 'Ice Cream', description: 'with matcha', image: require('../../assets/ice_matcha.png'), price: '$4.00', rating: 4.5 },
    { id: '4', name: 'Pancake', description: 'with matcha', image: require('../../assets/pancake.png'), price: '$3.00', rating: 4.8 },
];

type RootStackParamList = {
    Home: undefined;
    DetailExample: { message: string };
    Profile: undefined;
};

type DetailExampleProps = NavigationProp<RootStackParamList, 'DetailExample'>;


const Matcha = () => {

    const navigation = useNavigation<DetailExampleProps>();

    const handleProductPress = (product: any) => {
        navigation.navigate('DetailExample', {
            message: 'Product Details',
            name: product.name,
            description: product.description,
            image: product.image,
            price: product.price,
            rating: product.rating,
        });
    };

    return (
        <View style={{ backgroundColor: "#E5EBE3FF", flex: 1 }}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.lokasi}>Location</Text>
                        <Text style={styles.locationText}>Sukabumi, Indonesia.</Text>
                    </View>
                    <Image source={require("../../assets/tika.jpeg")} style={styles.avatar} />
                </View>

                <View style={styles.searchWrapper}>
                    <TextInput placeholder="Search matcha" style={styles.search} />
                </View>

                <View style={styles.imageWrapper}>
                    <Image source={require("../../assets/Bmatcha.png")} style={styles.bannerImage} />
                </View>

                <ScrollView horizontal={true} style={styles.scrollView}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Coffee matcha</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttoncase}>
                            <Text style={styles.buttonTextcase}>Cookies</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttoncase}>
                            <Text style={styles.buttonTextcase}>Drink matcha</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttoncase}>
                            <Text style={styles.buttonTextcase}>Ice cream</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <View style={styles.cardWrapper}>
                    {products.map(product => (
                        <TouchableOpacity key={product.id} style={styles.cardContainer} onPress={() => handleProductPress(product)}>
                            <Image source={product.image} style={styles.cardImage} />
                            <Image source={require("../../assets/star.png")} style={styles.iconStar} />
                            <Text style={styles.rating}>{product.rating}</Text>
                            <Text style={styles.cardTitle}>{product.name}</Text>
                            <Text style={styles.cardDescription}>{product.description}</Text>
                            <Text style={styles.cardPrice}>{product.price}</Text>
                            <Image source={require("../../assets/plus.png")} style={styles.iconPlus} />
                        </TouchableOpacity>
                        
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default Matcha;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 63,
        marginLeft: 30,
        marginRight: 30
    },
    lokasi: {
        color: "#4d6147",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 1,
        fontFamily: "sora"
    },
    locationText: {
        width: 143,
        height: 18,
        fontFamily: "sora",
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 18,
        color: "#4d6147"
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 10,
    },
    searchWrapper: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        paddingLeft: 20,
        borderRadius: 16,
        width: 380,
        height: 52,
        borderWidth: 2,
        borderColor: '#afc2a8',
        backgroundColor: "#afc2a8"
    },
    imageWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    bannerImage: {
        width: 360,
        height: 180,
        borderRadius: 15,
    },
    scrollView: {
        marginTop: 20,
        marginLeft: 25,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: "#7a9472",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 11,
    },
    buttoncase: {
        backgroundColor: "#afc2a8",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 11,
    },
    buttonText: {
        fontWeight: "600",
        fontFamily: "sora",
        fontSize: 14,
        color: "#afc2a8",
    },
    buttonTextcase: {
        fontWeight: "600",
        fontFamily: "sora",
        fontSize: 14,
        color: '#4d6147',
    },
    cardWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: 10,
        marginTop: 70
    },
    cardContainer: {
        backgroundColor: "#afc2a8",
        borderRadius: 12,
        padding: 4,
        marginBottom: 70,
        width: '45%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#4d6147",
        marginTop: 10,
        marginLeft: 5
    },
    cardImage: {
        width: '100%',
        height: 130,
        borderRadius: 10,
    },
    cardDescription: {
        fontSize: 14,
        marginLeft: 7,
        color: "#4d6147",
    },
    cardPrice: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        color: "#4d6147",
    },
    iconPlus: {
        marginHorizontal: 100,
        marginTop: -30,
        width: 35,
        height: 35,
    },
    iconStar: {
        position: "absolute",
        width: 20,
        height: 20,
        marginLeft: 9,
        marginTop: 5
    },
    rating: {
        position: "absolute",
        color: "#4d6147",
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 35,
    }
});
