import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    DetailOrder: { 
        name: string, 
        image: any,
        price: string };
    DetailExample: { 
        name: string, 
        image: any,
        price: string };
};

type DetailOrder = {
    route: RouteProp<RootStackParamList, 'DetailOrder'>;
    navigation: StackNavigationProp<RootStackParamList, 'DetailOrder'>;
};

const DetailOrder= () => {

    const navigation = useNavigation();
    const route = useRoute<RouteProp<RootStackParamList, 'DetailOrder'>>();

    const {name, image, price} = route.params || {
        name  : "pancake",
        image : require("../../assets/pancake.png"),
        price : "$3.00"

    };

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1); 
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../assets/back.png")} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Order</Text>
            </View>

            <View style={styles.deliveryOptionContainer}>
                <TouchableOpacity style={styles.deliveryButtonSelected}>
                    <Text style={styles.deliveryTextSelected}>Deliver</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deliveryButton}>
                    <Text style={styles.deliveryText}>Pick Up</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.addressContainer}>
                <Text style={styles.addressLabel}>Delivery Address</Text>
                <Text style={styles.address}>Jl. Kpg Sutoyo</Text>
                <Text style={styles.subAddress}>Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</Text>
                <View style={styles.addressButtonsContainer}>
                    <TouchableOpacity style={styles.addressButton}>
                        <Image source={require("../../assets/edit.png")} style={styles.smallIcon} />
                        <Text style={styles.addressButtonText}>Edit Address</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addressButton}>
                        <Image source={require("../../assets/doc.png")} style={styles.smallIcon} />
                        <Text style={styles.addressButtonText}>Add Note</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.productContainer}>
                <Image source={image} style={styles.productImage} />
                <View>
                    <Text style={styles.productName}>{name}</Text>
                    <Text style={styles.productDescription}>with Chocolate</Text>
                </View>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={handleDecrement} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity onPress={handleIncrement} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.discountContainer}>
                <Image source={require("../../assets/percent.png")} style={styles.discountIcon} />
                <Text style={styles.discountText}>1 Discount is applied</Text>
                <Image source={require("../../assets/arrow.png")} style={styles.arrowRight} />
            </View>

            <View style={styles.paymentSummary}>
                <Text style={styles.paymentTitle}>Payment Summary</Text>
                <View style={styles.paymentRow}>
                    <Text style={styles.paymentLabel}>Price</Text>
                    <Text style={styles.paymentValue}>{price}</Text>
                </View>
                <View style={styles.paymentRow}>
                    <Text style={styles.paymentLabel}>Delivery Fee</Text>

                    <Text style={styles.paymentValue}>$ 1.0</Text>
                </View>
                <View style={styles.paymentRow}>
                    <Text style={styles.paymentLabel}>Total Payment</Text>
                    <Text style={styles.paymentTotal}>$ 5.53</Text>
                </View>
            </View>

            <View style={styles.paymentMethodContainer}>
                <Image source={require("../../assets/payments.png")} style={styles.paymentIcon} />
                <View style={styles.money}>
                <Text style={styles.paymentMethodText}>Cash</Text>
                </View>
                <Text style={styles.paymentMethodAmount}>$ 5.53</Text>
                <Image source={require("../../assets/more.png")} style={styles.dotsIcon} />
            </View>

            <TouchableOpacity style={styles.orderButton}>
                <Text style={styles.orderButtonText}>Order</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DetailOrder;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5EBE3FF',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#4d6147',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    icon: {
        width: 24,
        height: 24,
    },
    deliveryOptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    deliveryButtonSelected: {
        backgroundColor: '#afc2a8',
        padding: 10,
        borderRadius: 10,
        width: '48%',
        alignItems: 'center',
    },
    deliveryButton: {
        backgroundColor: '#cbdbc5',
        padding: 10,
        borderRadius: 10,
        width: '48%',
        alignItems: 'center',
    },
    deliveryTextSelected: {
        color: '#4d6147',
        fontWeight: '600',
    },
    deliveryText: {
        color: '#94a38e',
        fontWeight: '600',
    },
    addressContainer: {
        marginBottom: 50,
    },
    addressLabel: {
        color: '#4d6147',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 9,
    },
    address: {
        color: '#4d6147',
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 5,
    },
    subAddress: {
        fontSize: 12,
        color: '#7a9472',
        marginBottom: 10,
    },
    addressButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 7,
    },
    addressButton: {
        borderColor: '#afc2a8',
        borderWidth: 1,
        padding: 8,
        borderRadius: 16,
        flexDirection: 'row',
    },
    smallIcon: {
        width: 15,
        height: 16
    },
    addressButtonText: {
        color: '#7a9472',
        marginLeft: 10,
        marginTop:-2
    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    productImage: {
        width: 54,
        height: 54,
        borderRadius: 10,
        marginRight: 10,
    },
    productName: {
        color: '#728f67',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 2,
    },
    productDescription: {
        fontSize: 13,
        color: '#88A47F',
        
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
    },
    quantityButton: {
        borderColor: '#88A47F',
        borderWidth: 1,
        borderRadius: 20,
        width: 24,
        height: 24,
    },
    quantityButtonText: {
        color: '#728f67',
        fontWeight: '600',
        textAlign: 'center',
    },
    quantityText: {
        color: '#728f67',
        marginHorizontal: 10,
        fontSize: 14,
        fontWeight: '600',
    },
    discountContainer: {
        padding: 10,
        borderRadius: 14,
        marginBottom: 20,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#afc2a8',
    },
    discountIcon: {
        width: 24,
        height: 24,
        marginRight: 15,
    },
    discountText: {
        color: '#7a9472',
        fontWeight: '700',
    },
    arrowRight: {
        width: 12,
        height: 12,
        marginLeft: 'auto',
    },
    paymentSummary: {
        marginBottom: 25,
    },
    paymentTitle: { 
        color: '#4d6147',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    paymentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    paymentLabel: {
        fontSize: 14,
        color: '#4d6147',
        fontWeight: '400',
    },
    paymentValue: {
        color: '#7a9472',
        fontSize: 14,
        fontWeight: '600',
    },
    paymentTotal: {
        fontSize: 14,
        fontWeight: '700',
        color: '#4d6147',
    },
    paymentMethodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    money: {
        width: 50,
        height: 20, 
        backgroundColor: '#afc2a8', 
        borderRadius: 20,

    },
    paymentMethodText: {
        color: '#4d6147',
        fontSize: 14,
        fontWeight: '600',
        marginHorizontal: 10,
    },
    paymentMethodAmount: {
        color: '#4d6147',
        fontSize: 14,
        marginLeft:1,
    },
    dotsIcon: {
        width: 24,
        height: 24,
        marginLeft:"auto"
    },
    paymentIcon: {
        width: 24,
        height: 24,
    },

    orderButton: {
        backgroundColor: '#afc2a8',
        padding: 15,
        borderRadius: 14,
        alignItems: 'center',
    },
    orderButtonText: {
        color: '#4d6147',
        fontSize: 18,
        fontWeight: '600',
    },
});